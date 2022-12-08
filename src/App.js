import './App.css';
import Header from './components/header/Header'
import Login from './components/login/Login'
import Home from './components/home/Home'

import {Suspense, useState} from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'

const RequireAuth = ({ children, onLoginClick, isLoggedIn}) => {
    // const userIsLogged = localStorage.getItem("isLoggedIn");
 
    if (!isLoggedIn) {
       return <Login onLoginClick={onLoginClick}/>;
    }
    return children;
 };

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [posts, setPosts] = useState([])
  const navigate = useNavigate();

  function onLoginClick(email) {
      getUsers(email);
  }

  function getUsers(email) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => json.find( (item) => item.email === email))
        .then(loginedUser => {
          setIsLoggedIn(true)
          getPosts(loginedUser)
        //   localStorage.setItem("isLoggedIn", true);
          navigate("/home");
        return setUserData(loginedUser)
        })
  }

  function getPosts(loginedUser) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then(response => response.json())
          .then(json => json.filter( item => item.userId === loginedUser.id))
          .then(posts => setPosts(posts))
  }

  return (
    <div>
         <Header userData={userData} isLoggedIn={isLoggedIn}/>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Login onLoginClick={onLoginClick}/>}/>
              <Route path="/home" element={<RequireAuth onLoginClick={onLoginClick} isLoggedIn={isLoggedIn}> <Home posts={posts}/> </RequireAuth>}/>
            </Routes>
         </Suspense>
    </div>
  );
}

export default App;
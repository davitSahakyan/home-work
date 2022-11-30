import './App.css';
import Header from './components/header/Header'
import {useState} from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})

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
        return setUserData(loginedUser)
        })
  }

  function getPosts(loginedUser) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then(response => response.json())
          .then(json => json.filter( item => item.userId === loginedUser.id))
          .then(posts => setPosts(posts))
  }

  function getPostdetails(id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(response => response.json())
          .then(json => setPost(json))
  }

  return (
    <div>
      <Header onLoginClick={onLoginClick} userData={userData} isLoggedIn={isLoggedIn}/>
        {posts.length > 0 &&
            <div>
                <h2>Posts</h2>
                <ul>
                    {
                        posts.map( item => {
                            return <li key={item.id} onClick={() => getPostdetails(item.id)}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        }
        {Object.keys(post).length !== 0 &&
            <div>
                <h2> Details < /h2>
                <p>{post.body}</p>
            </div>
        }
    </div>
  );
}

export default App;

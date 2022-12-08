import { useState } from 'react'
import Posts from '../posts/Posts'
import PostDetails from '../postDetails/PostDetails'

export default function Home({posts}) {
    const [post, setPost] = useState({})

    function getPostdetails(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }

    return (
        <div>
            <Posts posts={posts} getPostdetails={getPostdetails}/>
            <PostDetails post={post}/>
        </div>
    )
}
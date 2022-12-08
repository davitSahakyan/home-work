export default function PostDetails({post}) {

    let noPost = Object.keys(post).length !== 0

    return (
        noPost && (
            <div>
                <h2> Details </h2>
                <p>{post.body}</p>
            </div>
        )
    )
}
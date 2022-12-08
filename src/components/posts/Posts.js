export default function Posts({posts ,getPostdetails}) {


    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {
                    posts.map(item => {
                        return <li key={item.id} onClick={() => getPostdetails(item.id)}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
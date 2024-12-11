const posts = [
    {
        id: 1,
        title: "Lorem1"
    },
    {
        id: 2,
        title: "Lorem2"
    },
    {
        id: 3,
        title: "Lorem3"
    }

]


export default function Posts() {
    return (
        <main className="container">
            <div className="center">
                {posts.map((post) => (<div key={post.id}> {post.title}</div>))}
            </div>

        </main>
    )
}
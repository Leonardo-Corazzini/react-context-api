import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import Card from './Card/Card'
export default function PostList() {
    const { posts } = useContext(GlobalContext)

    return (
        <div className="row">
            {posts && posts.map(post => (
                <div key={post.id} className="col-6">
                    <Card post={post} />
                </div>
            ))}
        </div>
    )
}
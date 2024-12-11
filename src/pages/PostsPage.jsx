import { Link } from "react-router-dom"
import PostList from "../components/PostList"



export default function PostsPage() {

    return (
        <>
            <div className="container">
                <Link to='/posts/create' >Aggiungi la ricetta</Link>
            </div>
            <div className="container">
                <h2>Tutte le ricette</h2>
                <PostList />
            </div>
        </>
    )
}
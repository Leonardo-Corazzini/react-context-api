import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URI } from '../../config'
import Card from "../../components/Card/Card"
import { useNavigate } from "react-router-dom"
export default function Index() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    function fetchPosts() {
        axios.get(`${BASE_URI}/posts`)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => fetchPosts(), [])
    return (
        <>
            <div className="container">
                <button onClick={() => navigate('create')}>
                    Aggiungi Ricetta
                </button>
            </div>
            <div className="container">
                <div className="row">
                    {posts.map(post =>
                        <div key={post.id} className="col-6">
                            <Card post={post} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URI } from "../config"
import placeHolderImage from '../assets/placeholderimg.png'

export default function HomePage() {
    const [post, setPost] = useState(null)
    function fetchPost(id) {
        axios.get(`${BASE_URI}/posts/${id}`)
            .then((res) => setPost(res.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => fetchPost(Math.round(Math.random() * 5 + 1)), [])

    return (
        <>
            <main className="container">
                <h2 className="center">Ricetta della settimana</h2>
            </main>
            {post ?
                <>
                    <div className="container">
                        <figure className="hero">
                            <img src={post.image ? `${BASE_URI}/${post.image}` : placeHolderImage} alt="" />
                        </figure>
                    </div>
                    <div className="container">
                        <h2>{post.name}</h2>
                        <div>{post.tags}</div>
                        <p>{post.content}</p>
                    </div>
                </>
                :
                <div>
                    loading...
                </div>}
        </>

    )
}
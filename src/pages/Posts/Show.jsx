import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URI } from "../../config"
import { useParams, useNavigate } from "react-router-dom"
import placeHolderImage from '../../assets/placeholderimg.png'


export default function Show() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URI}/posts`)
            .then(res => setPosts(res.data))
            .catch((err) => console.log(err))
    }, [])
    const [post, setPost] = useState(null)
    let { id } = useParams()
    function fetchPost(id) {
        axios.get(`${BASE_URI}/posts/${id}`)
            .then((res) => setPost(res.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => fetchPost(id), [id])
    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <button onClick={() => navigate('/')}>
                    Torna alla Home
                </button>
                <button onClick={() => navigate(-1)}>
                    Indietro
                </button>
                {parseInt(id) + 1 <= posts.length &&
                    <button onClick={() => navigate(`/posts/${parseInt(id) + 1}`)}>
                        Avanti
                    </button>}

            </div>
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
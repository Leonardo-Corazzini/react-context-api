import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URI } from "../config"


export default function usePosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            try {
                const { data } = await axios.get(`${BASE_URI}/posts`)
                setPosts(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchPosts()
    }, [])

    return posts


}

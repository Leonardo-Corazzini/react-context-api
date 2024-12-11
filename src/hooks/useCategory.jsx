import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URI } from "../config"


export default function useCategory() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        async function fetchCategory() {
            try {
                const { data } = await axios.get(`${BASE_URI}/category`)
                setCategory(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchCategory()
    }, [])


    return category


}

import { BASE_URI } from '../../config'
import Style from './Card.module.css'
import placeHolderImage from '../../assets/placeholderimg.png'
import { Link } from 'react-router-dom'
export default function Card({ post }) {
    const { title, image, tags, id } = post
    return (
        <div className={Style.card}>
            <div className={Style.header}>
                <div className={Style.thumb}>
                    <img src={image ? `${BASE_URI}/${image}` : placeHolderImage} alt="" />
                </div>
            </div>
            <div className={Style.body}>
                <h2 className={Style.title}>{title}</h2>
                <div className={Style.tags}>{tags}</div>
                <Link to={`/posts/${id}`}>Leggi di piu'</Link>
            </div>
        </div>
    )
}
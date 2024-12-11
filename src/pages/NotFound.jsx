import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <main>
            <section>
                <h1>error 404</h1>
                <p>pagina non trovata</p>
                <Link to='/'>Torna alla home</Link>
            </section>
        </main>
    )
}
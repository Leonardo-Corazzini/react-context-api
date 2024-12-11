import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <nav className='nav container' >
            <ul className='menu'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>Ricette</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>Chi siamo</NavLink>
                </li>

            </ul>
        </nav>
    )
}
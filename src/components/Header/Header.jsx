import { NavLink } from "react-router-dom";
import style from './Header.module.css';

const Items = [
    { to: '/', title: 'Home' },
    { to: '/movies', title: 'Movies' },
]

const Header = () => {
    return (
        <header>
            <nav className={style.nav}>
                <ul>
                    {Items.map(item =>
                        <li key={item.title}>
                            <NavLink
                                className={(isActive) => isActive ? style.navActive : null}
                                to={item.to}>
                                {item.title}
                            </NavLink>
                        </li>)}
                </ul>
            </nav>
        </header>
    )
}

export default Header
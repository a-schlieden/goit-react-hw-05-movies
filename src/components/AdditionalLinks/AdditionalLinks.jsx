import { NavLink } from "react-router-dom";
// import style from './Header.module.css';

const LinkItems = [
    { to: 'cast', title: 'Cast' },
    { to: 'reviews', title: 'Review' },
]

const AdditionalLinks = () => {
    return (
        <ul>
            {LinkItems.map(item =>
                <li key={item.title}>
                    <NavLink
                        // className={(isActive) => isActive ? style.navActive : null}
                        to={item.to}>
                        {item.title}
                    </NavLink>
                </li>)}
        </ul>
    )
}

export default AdditionalLinks
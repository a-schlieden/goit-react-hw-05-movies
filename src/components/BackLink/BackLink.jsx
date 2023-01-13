import { NavLink } from "react-router-dom";
// import style from './Header.module.css';

const BackLink = () => {
    return (

        <NavLink
            // className={(isActive) => isActive ? style.navActive : null}
            to={'/'}>
            GoBack
        </NavLink>

    )
}

export default BackLink
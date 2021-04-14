import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink to='/profile'
                     className={ styles.navItem }>
                Profile
            </NavLink>
            <NavLink to='/dialogs'
                     className={ styles.navItem }>
                Messages
            </NavLink>
            <NavLink to='/news'
                     className={ styles.navItem }>
                News
            </NavLink>
            <NavLink to='/music'
                     className={ styles.navItem }>
                Music
            </NavLink>
        </nav>
    );
};

export default Nav;

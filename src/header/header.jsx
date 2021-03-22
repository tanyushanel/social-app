import React from 'react';
import styles from './header.module.scss'
import Search from "../search/search";


const Header = () => {
    return (
        <div className="header-wrapper">

            <div className="menu-toggle">   </div>

            <img className="logo" src="../assets/images/logo.png" />

            <Search />

            <div className="status-container">
                <div className="account-img"></div>
            </div>

        </div>
    )
}

export default Header;
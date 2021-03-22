import React from "react";
import styles from "./header.module.scss";
import Search from "../search/search";

const Header = () => {
	return (
		<div className='header'>
			<div className={styles.menuIcon}> * </div>

			<img className={styles.logo} src='http://demo.foxthemes.net/socialitev2.0/assets/images/logo.png' />

			<Search />

			<div className='statusContainer'>
				<div className='accountImg'></div>
			</div>
		</div>
	);
};

export default Header;

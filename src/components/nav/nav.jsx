import React from "react";
import styles from "./nav.module.scss";

const Nav = () => {
	return (
		<nav className='nav'>
			<a href='#' className={styles.navItem}>
				{" "}
				Profile{" "}
			</a>
			<a href='#' className={styles.navItem}>
				{" "}
				Messages{" "}
			</a>
			<a href='#' className={styles.navItem}>
				{" "}
				News{" "}
			</a>
			<a href='#' className={styles.navItem}>
				{" "}
				Music{" "}
			</a>
		</nav>
	);
};

export default Nav;

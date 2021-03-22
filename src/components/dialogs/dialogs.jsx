import React from "react";
import styles from "./dialogs.module.scss";
import Post from "../posts/post/post";

const Dialogs = () => {
	return (
		<div className={styles.dialogs}>
			<ul className={styles.contacts}>
				<li className='contact'>Tanya</li>
				<li className='contact'>Anya</li>
				<li className='contact'>Vanya</li>
				<li className='contact'>Banya</li>
			</ul>
			<ul className={styles.messages}>
				<Post message='Aaaaaaaaaaaaaaaaaa' />
				<Post message='Bbbbbbbbbbbbbbbbbbb'/>


			</ul>
		</div>
	);
};

export default Dialogs;

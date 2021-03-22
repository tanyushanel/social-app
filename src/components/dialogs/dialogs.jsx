import React from "react";
import styles from "./dialogs.module.scss";

const Dialogs = () => {
	return (
		<div className={styles.dialogs}>
			<ul className={styles.contacts}>
				<li className='contact'>Tanya</li>
				<li className='contact'>Anya</li>
				<li className='contact'>Vanya</li>
				<li className='contact'>Banya</li>
			</ul>
			<div className={styles.messages}></div>
		</div>
	);
};

export default Dialogs;

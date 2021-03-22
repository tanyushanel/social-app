import React from "react";
import styles from "./dialogs.module.scss";

const Dialogs = () => {
	return (
		<div className={styles.dialog}>
			<ul className={styles.contacts}>
				<li className='contact'>Tanya</li>
				<li className='contact'>Anya</li>
				<li className='contact'>Vanya</li>
				<li className='contact'>Banya</li>
			</ul>
			<div className={styles.messages}>
				<form>
					<textarea placeholder='Write a message...'></textarea>
					<button> Add </button>
				</form>

				<p> My posts </p>

				<ul className='posts'>
					<li className='post'> Post 1 </li>
					<li className='post'> Post 2 </li>
					<li className='post'> Post 3</li>
				</ul>
			</div>
		</div>
	);
};

export default Dialogs;

import React from "react";
import styles from "./profile.module.scss";
import Ava from "../avatar/avatar";

const Profile = () => {
	return (
		<div>
			<form>
				<textarea className={styles.textarea} placeholder='Write a message...'></textarea>
				<button> Add </button>
			</form>

			<ul className='posts'>
				<li className='post'>
					<Ava />
					<span className={styles.text}> Post 1 </span>
				</li>
				<li className='post'>
					<Ava />
					<span className={styles.text}> Post 2 </span>
				</li>
				<li className='post'>
					<Ava />
					<span className={styles.text}> Post 3 </span>
				</li>
			</ul>
		</div>
	);
};

export default Profile;

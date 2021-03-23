import React from "react";
import styles from "./profile.module.scss";

import ProfileInfo from "./profileInfo/profileInfo";
import Post from "./post/post";

const Profile = () => {
	return (

		<div >
			<article className={styles.addPost}>
				<ProfileInfo />
				<form>
					<textarea className={styles.textarea} placeholder='Write a message...'></textarea>
					<button> Add </button>
				</form>
			</article>

			<Post className={styles.postItem}/>
		</div>
	);
};

export default Profile;

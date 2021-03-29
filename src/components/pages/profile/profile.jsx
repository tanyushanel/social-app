import React from "react";
import styles from "./profile.module.scss";
import ProfileInfo from "./profileInfo/profileInfo";
import Post from "./post/post";


const Profile = (props) => {

    let postsElements = props.posts
        .map((post, i) => <Post className={ styles.postItem } id={ post.id } text={ post.text }
                                likesCount={ post.likesCount } dislikesCount={ post.dislikesCount }
                                key={ i }/>)
    return (
        <div>
            <article className={ styles.addPost }>
                <ProfileInfo/>
                <form>
                    <textarea className={ styles.textarea } placeholder='Write a message...'></textarea>
                    <button> Add</button>
                </form>
            </article>

            <div className={ styles.posts }> { postsElements }</div>

        </div>
    );
};

export default Profile;

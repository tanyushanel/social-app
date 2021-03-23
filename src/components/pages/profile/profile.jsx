import React from "react";
import styles from "./profile.module.scss";

import ProfileInfo from "./profileInfo/profileInfo";
import Post from "./post/post";

const Profile = () => {

    let posts = [
        { id: 0, text: 'I want to break free', likesCount: 6, dislikesCount: 2 },
        { id: 1, text: 'I want to sleep free', likesCount: 34, dislikesCount: 1 },
        { id: 2, text: 'I want to love free', likesCount: 13, dislikesCount: 1 },
        { id: 3, text: 'I want to break free', likesCount: 3, dislikesCount: 0 },

    ]

    let postsElements = posts.map((post, i) => <Post className={ styles.postItem } id={ post.id } text={ post.text }
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

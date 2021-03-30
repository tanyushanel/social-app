import React from "react";
import styles from "./profile.module.scss";
import ProfileInfo from "./profileInfo/profileInfo";
import Post from "./post/post";


const Profile = (props) => {

    let postsElements = props.posts
        .map((post, i) => <Post
            id={ post.id }
            text={ post.text }
            likesCount={ post.likesCount }
            dislikesCount={ post.dislikesCount }
            key={ i }/>);

    let newPostElem = React.createRef();

    let onAddPost = (e) => {

        e.preventDefault();

        let text = newPostElem.current.value;
        props.addPost(text);
        newPostElem.current.value = '';
    }

    return (
        <div>
            <div className={ styles.addPost }>
                <ProfileInfo/>

                <form className={ styles.addPostForm }>
                    <textarea className={ styles.textarea }
                              ref={ newPostElem }
                              placeholder='Write a message...'
                    ></textarea>
                    <button  onClick={ onAddPost }> Add</button>
                </form>
            </div>

            <div className={ styles.posts }> { postsElements }</div>

        </div>
    );
};

export default Profile;

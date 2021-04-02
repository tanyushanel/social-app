import ProfileInfo from "../profileInfo/profileInfo";
import React from "react";
import styles from './addPost.module.scss'

const AddPost = (props) => {
    let newPostElem = React.createRef();
    let onAddPost = (e) => {
        e.preventDefault();
        let txt = newPostElem.current.value;
        props.addPost(txt);
    }
    let onNewPostChange = () => {
        let txt = newPostElem.current.value;
        props.updateNewPostText(txt);
    }
    return (
        <div className={ styles.addPost }>
            <ProfileInfo/>
            <form className={ styles.addPostForm }>
                    <textarea className={ styles.textarea }
                              onChange={ onNewPostChange }
                              value={ props.newPostText }
                              ref={ newPostElem }
                              placeholder='Write a message...'/>
                <button onClick={ onAddPost }> Add</button>

            </form>
        </div>
    )
}

export default AddPost;
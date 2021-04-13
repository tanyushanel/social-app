import ProfileInfo from "../profileInfo/profileInfo";
import React from "react";
import styles from './addPost.module.scss';
import { addPostActionCreator, updateNewTextPostActionCreator } from "../../../../state";

const AddPost = (props) => {
    let newPostText = props.newPostText;
    const onAddPost = (e) => {
        e.preventDefault();
        let action = addPostActionCreator();
        props.dispatch(action);
    };
    const onNewPostChange = (e) => {
        let txt = e.target.value;
        let action = updateNewTextPostActionCreator(txt);
        props.dispatch(action);
    };

    return (
        <div className={ styles.addPost }>
            <ProfileInfo/>
            <form className={ styles.addPostForm }>
                    <textarea className={ styles.textarea }
                              onChange={ onNewPostChange }
                              value={ newPostText }
                              placeholder='Write a message...'/>
                <button onClick={ onAddPost }> Add</button>

            </form>
        </div>
    );
};

export default AddPost;
import ProfileInfo from "../profileInfo/profileInfo";
import React from "react";
import styles from './addPost.module.scss';

const AddPost = (props) => {
    let newPostElem = React.createRef();

    const onAddPost = (e) => {
        e.preventDefault();
        props.dispatch({ type: "ADD_POST" });
    };
    const onNewPostChange = () => {
        let txt = newPostElem.current.value;
        props.dispatch({ type: "UPDATE_NEW_TEXT_POST", newTxt: txt });
    };
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
    );
};

export default AddPost;
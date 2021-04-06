import ProfileInfo from "../profileInfo/profileInfo";
import React from "react";
import styles from './addPost.module.scss';
import { addPostActionCreator, updateNewTextPostActionCreator } from "../../../../state";

const AddPost = (props) => {
    let newPostElem = React.createRef();

    const onAddPost = (e) => {
        e.preventDefault();
        //props.addPost();
        //let action = { type: "ADD_POST" };
        let action = addPostActionCreator();
        props.dispatch(action);
    };
    const onNewPostChange = () => {
        let txt = newPostElem.current.value;
        //props.updateNewsPostText(txt);
        //let action = { type: "UPDATE_NEW_TEXT_POST", newTxt: txt };
        let action = updateNewTextPostActionCreator(txt);
        props.dispatch(action);
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
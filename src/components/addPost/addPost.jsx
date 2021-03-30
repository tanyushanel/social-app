import React from 'react';
import styles from "../pages/dialogs/dialogs.module.scss";

const AddPost = (props) => {
    return (
        <form className={ styles.addMessageForm }>
                    <textarea className={ styles.textarea }

                              placeholder='Write a message...'
                    ></textarea>
            <button > Add</button>
        </form>
    )
}

export default  AddPost;
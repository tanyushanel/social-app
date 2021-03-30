import React from "react";
import styles from "./dialogs.module.scss";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import AddPost from "../../addPost/addPost";


const Dialogs = (props) => {
    let dialogsElements =
        props.dialogs.map((dialog, i) => <Dialog name={ dialog.name }
                                                 id={ dialog.id }
                                                 key={ i }/>);

    let messagesElements =
        props.messages.map((message, i) => <Message message={ message.text }
                                                    key={ i }/>)

    let newMessageElem = React.createRef();

    let addMessage = () => {
        let txtMessage = newMessageElem.current.value;
        alert(txtMessage);
    }

    return (
        <div className={ styles.dialogs }>
            <ul className={ styles.contacts }>
                { dialogsElements }
            </ul>
            <ul className={ styles.posts }>
                { messagesElements }
            </ul>

            <form className={ styles.addMessageForm }>
                    <textarea className={ styles.textarea }
                              ref={ newMessageElem }
                              placeholder='Write a message...'
                    ></textarea>
                <button onClick={ addMessage }> Add</button>
            </form>
        </div>
    );
};

export default Dialogs;

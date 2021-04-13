import React from "react";
import styles from "./dialogs.module.scss";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../../state";

const Dialogs = (props) => {
    const dialogsElements =
        props.dialogsPage.dialogs.map((dialog, i) => <Dialog name={ dialog.name }
                                                             id={ dialog.id }
                                                             key={ i }/>);

    const messagesElements =
        props.dialogsPage.messages.map((message, i) => <Message message={ message.message }
                                                                key={ i }/>);

    let newMessageBody = props.dialogsPage.newMessageBody;

    const onSendMessageClick = (e) => {
        e.preventDefault();
        let action = sendMessageActionCreator();
        props.dispatch(action);
    };

    const onUpdateMessageBody = (e) => {
        let body = e.target.value;
        let action = updateNewMessageBodyActionCreator(body);
        props.dispatch(action);
    };
    return (
        <div className={ styles.dialogs }>
            <ul className={ styles.contacts }>
                { dialogsElements }
            </ul>
            <ul className={ styles.posts }>
                <li>{ messagesElements }</li>
                <li> <textarea placeholder="Write a message..."
                               value={ newMessageBody }
                               onChange={ onUpdateMessageBody }/>
                    <button onClick={ onSendMessageClick }> Send</button>
                </li>
            </ul>


        </div>
    );
};

export default Dialogs;

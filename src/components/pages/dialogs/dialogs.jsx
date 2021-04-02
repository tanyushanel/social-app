import React from "react";
import styles from "./dialogs.module.scss";
import Dialog from "./dialog/dialog";
import Message from "./message/message";



const Dialogs = (props) => {
    let dialogsElements =
        props.dialogsPage.dialogs.map((dialog, i) => <Dialog name={ dialog.name }
                                                 id={ dialog.id }
                                                 key={ i }/>);

    let messagesElements =
        props.dialogsPage.messages.map((message, i) => <Message message={ message.text }
                                                    key={ i }/>);



    return (
        <div className={ styles.dialogs }>
            <ul className={ styles.contacts }>
                { dialogsElements }
            </ul>
            <ul className={ styles.posts }>
                { messagesElements }
            </ul>


        </div>
    );
};

export default Dialogs;

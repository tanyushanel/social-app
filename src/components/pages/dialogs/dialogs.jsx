import React from "react";
import styles from "./dialogs.module.scss";
import Dialog from "./dialog/dialog";
import Message from "./message/message";


const Dialogs = (props) => {

    let dialogs = [
        { id: 0, name: 'Tanya', posts: [] },
        { id: 1, name: 'Anya', posts: [] },
        { id: 2, name: 'Vanya', posts: [] },
        { id: 3, name: 'Banya', posts: [] },
    ];


    let messages = [
        { id: 0, text: 'Aaaaaaaaa', time: '', from: '' },
        { id: 1, text: 'Bbbbbbbbb', time: '', from: '' },
        { id: 2, text: 'Ccccccccc', time: '', from: '' },
        { id: 3, text: 'Ddddddddd', time: '', from: '' },

    ]

    let dialogsElements = dialogs
        .map((dialog, i) => <Dialog name={ dialog.name } id={ dialog.id } key={ i }/>);

    let messagesElements = messages
        .map((message, i) => <Message message={ message.text } key={ i }/>)

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

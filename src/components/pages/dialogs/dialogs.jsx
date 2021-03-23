import React from "react";
import styles from "./dialogs.module.scss";
import Dialog from "./dialog/dialog";
import Message from "./message/message";




const Dialogs = (props) => {

	let dialogsData = [
		{id: 0, name: 'Tanya', posts: []},
		{id: 1, name: 'Anya', posts: []},
		{id: 2, name: 'Vanya', posts: []},
		{id: 3, name: 'Banya', posts: []},
	];

	let messagesData = [
		{id: 0, text: 'Aaaaaaaaa', time: '', from: ''},
		{id: 1, text: 'Bbbbbbbbb', time: '', from: ''},
		{id: 2, text: 'Ccccccccc', time: '', from: ''},
		{id: 3, text: 'Ddddddddd', time: '', from: ''},

	]
	
	return (
		<div className={styles.dialogs}>
			<ul className={styles.contacts}>
				<Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
				<Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
				<Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
				<Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
			</ul>
			<ul className={styles.posts}>
				<Message message={messagesData[0].text} />
				<Message message={messagesData[1].text} />
				<Message message={messagesData[2].text} />
				<Message message={messagesData[3].text} />

			</ul>
		</div>
	);
};

export default Dialogs;

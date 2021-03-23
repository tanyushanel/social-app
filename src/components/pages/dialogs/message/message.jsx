import React from 'react';
import styles from './message.module.scss';
import ProfileInfo from "../../profile/profileInfo/profileInfo";

const Message = (props) => {
    return (
    <div className={styles.messages}>
        <ProfileInfo/>
        <article className={styles.message}>{ props.message }</article>
    </div>

)
}

export default Message;
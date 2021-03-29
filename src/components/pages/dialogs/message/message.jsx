import React from 'react';
import styles from './message.module.scss';
import ProfileInfo from "../../profile/profileInfo/profileInfo";

const Message = (props) => {
    return (
        <div className={ `${styles.message} ${styles.messageAuthor} `}>
            <ProfileInfo/>
            <p >{ props.message }</p>
        </div>

    )
}

export default Message;
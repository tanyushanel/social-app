import React from 'react';
import styles from './friends.module.scss';
import Friend from "./friend/friend";

const Friends = (props) => {
    return (
        <ul className={styles.friendsContainer}>
            <Friend />
        </ul>
    )
}

export default Friends;
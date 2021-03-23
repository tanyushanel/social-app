import React from "react";
import {BiLike, BiDislike} from 'react-icons/bi';
import styles from "./post.module.scss";
import ProfileInfo from "../profileInfo/profileInfo";
import Message from "../../dialogs/message/message";


const Post = (props) => {

    let postData = [
        {id: 0, text:'I want to break free', likesCount: 6, dislikesCount: 2},
        {id: 1, text:'I want to break free', likesCount: 34, dislikesCount: 1},
        {id: 2, text:'I want to break free', likesCount: 13, dislikesCount: 1},
        {id: 3, text:'I want to break free', likesCount: 3, dislikesCount: 0},

    ]
    return (
        <article className={styles.myPost}>
            <ProfileInfo/>
            <p> {postData[0].text} </p>
            <div className={styles.rating}>
                <BiLike className={styles.icons}/> <span> {postData[0].likesCount} </span>
                <BiDislike className={styles.icons}/> <span> {postData[0].dislikesCount} </span>
            </div>
        </article>
    )
}

export default Post;
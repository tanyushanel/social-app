import React from "react";
import { BiLike, BiDislike } from 'react-icons/bi';
import styles from "./post.module.scss";
import ProfileInfo from "../profileInfo/profileInfo";


const Post = (props) => {

    return (
        <article className={ styles.myPost }>
            <ProfileInfo/>
            <p> { props.text } </p>
            <div className={ styles.rating }>
                <BiLike className={ styles.icons }/> <span> { props.likesCount } </span>
                <BiDislike className={ styles.icons }/> <span> { props.dislikesCount } </span>
            </div>
        </article>
    )
}

export default Post;
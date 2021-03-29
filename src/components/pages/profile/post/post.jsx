import React from "react";
import { BiLike, BiDislike } from 'react-icons/bi';
import styles from "./post.module.scss";
import ProfileInfo from "../profileInfo/profileInfo";


const Post = (props) => {

    return (
        <div className={ styles.post }>

            <ProfileInfo/>
            <div className={ styles.text }>
                <div>{ props.text }</div>
                <div className={ styles.txtRating }>
                    <div><BiLike className={ styles.icons }/> <span> { props.likesCount } </span></div>
                    <div><BiDislike className={ styles.icons }/> <span> { props.dislikesCount } </span></div>
                </div>
            </div>

        </div>
    )
}

export default Post;
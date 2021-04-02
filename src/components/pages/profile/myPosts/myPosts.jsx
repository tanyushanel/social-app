import Post from "../post/post";
import React from "react";
import styles from "./myPosts.module.scss";


const MyPosts = (props) => {
    let postsElements = props.posts
        .map((post, i) => <Post
            id={ post.id }
            text={ post.text }
            likesCount={ post.likesCount }
            dislikesCount={ post.dislikesCount }
            key={ i }/>);

    return (
        <div className={ styles.posts }> { postsElements }</div>
    )
}

export default MyPosts;

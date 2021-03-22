import React from 'react';
import styles from './post.module.scss';

const Post = (props) => {
    return (
        <div className="posts-container">
            <article className="post-item">{ props.message }</article>
        </div>

    )
}

export default Post;
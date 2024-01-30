import React from "react";
import './post.css'
const Post = (props) => {
    return (
        <div className="post-container">
            <h3>Id: {props.id}</h3>
            <h3>Title: {props.title}</h3>
            <h3>Author: {props.author}</h3>
        </div>
    );
}

export default Post
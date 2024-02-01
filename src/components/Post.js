import React from 'react'
import './Post.css'

const Post = (props) => {
   
    //Handling when selected a post
    const selectedHandler = () => {
        //selectedItem(post);
    }

    return (
        <div className='Post'>
            <div className='card' onClick={props.selectedinPost}>
                <h3>Id: {props.post.id}</h3>
                <h2>Title: {props.post.title}</h2>
                <h2>Author: {props.post.author}</h2>
            </div>
        </div>
    )
}

export default Post
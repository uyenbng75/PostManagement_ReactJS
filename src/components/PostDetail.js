import React from 'react'
import './PostDetail.css'

const PostDetail = (props) => {

  console.log("i'm here:" + props.postDetail.id);

  const editHandler = (e) => {
    e.preventDefault();
    alert("Editing:" + props.postDetail.id)
  }

  return (
    <div className='post-detail'>
      <div>Id: {props.postDetail.id}</div>
      <div>Title: {props.postDetail.title}</div>
      <div>Content: {props.postDetail.content}</div>
      <div className='action-button'>
        <button onClick={(e) => { editHandler(e) }}>Edit</button>
        <button onClick={() => props.deletePost(props.postDetail.id)}>Delete</button>
      </div>
    </div>

  )
}

export default PostDetail
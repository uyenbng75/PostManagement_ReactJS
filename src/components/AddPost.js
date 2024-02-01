import axios from 'axios';
import React, { useRef } from 'react'



const AddPost = (props) => {

    const username = 'user';
    const password = '1';


    const newPostForm = useRef();

    const addPost = () => {
        const form = newPostForm.current;
        const data = {
            title: form['title'].value,
            title: form['author'].value,
            title: form['content'].value

        }

        axios.post('http://localhost:8080/posts' + data, {
            headers: {
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                props.flagHandler();
            })
            .catch(err => console.log(err.message));
    }
    return (
        <div className='new-post'>
            <form ref={newPostForm}>
                <h1>New Post</h1>

                <label>title</label>
                <input type="text" label={'title'} name={'title'}></input>

                <label>author</label>
                <input type="text" label={'author'} name={'author'}></input>

                <label>content</label>
                <input type="text" label={'content'} name={'content'}></input>
            </form>
            <button onClick={addPost}> Add Post</button>
        </div>

    )
}

export default AddPost
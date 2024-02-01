import axios from 'axios';
import React, { useRef } from 'react'

const newPost = (props) => {

    const [username, setUsername] = useState("user");
    const [password, setPassword] = useState("1");

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
            fetchPosts();
        })
        .catch(err => console.log(err.message));
    }
}

const AddPost = () => {
  return (
    <div className='new-post'>
        AddPost
    <div>Title</div>
    <input type='text'> name={title}</input>

    <div>Author</div>
    <input type='text'> name={author}</input>

    <div>Content</div>
    <input type='text'> name={content}</input>
    </div>
  )
}

export default AddPost
import React, { useState, useEffect } from 'react'
import Post from '../components/Post'
import Posts from '../components/Posts'
import PostDetail from '../components/PostDetail'
import axios from 'axios'

const Dashboard = () => {
    //Default not choosing any post
    const [posts, setPosts] = useState([]);
    const [postDetail, setPostDetail] = useState(null);
    const [currentTitle, setCurrentTitle] = useState("");
    const [username, setUsername] = useState("user");
    const [password, setPassword] = useState("1");

    //Handling when selected a post
    const selectedItemHandler = (post) => {
        // console.log("SelectPOST::",post);
        setPostDetail(post);

    }

    //console.log("post value" + postDetail);
    //Handling when clicked button "Change title"
    const changeTitleHandler = () => {
        postDetail.Title = currentTitle;
        setPostDetail({ ...postDetail })
    }

    // useEffect(() => {
    //     if (postDetail)
    //         setCurrentTitle(postDetail.Title)
    // }, [postDetail])

    //Handling delete post
    const deleteHandler = (id) => {
        console.log(id)
        axios.delete('http://localhost:8080/posts/' + id, {
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

    //Handling fetches all posts
    const fetchPosts = () => {
        axios.get('http://localhost:8080/posts', {
            headers: {
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch(err => console.log(err.message));
    }

    console.log("post fetch:::", posts);
    useEffect(() => {
        fetchPosts();
    }, [username, password])

    return (
        <>
            <div className='container'>
                <h1>POST MANAGEMENT</h1>
                <div className='post-card'>
                    <Posts posts={posts} selectedPost={selectedItemHandler} />
                </div>
                <div className='action'>
                    <input type='text' value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)} placeholder='Type title' />
                    <button onClick={changeTitleHandler}>Change title</button>
                </div>
                <div className='add-post'>
                    
                </div>
            </div>
            {<div className='post-detail'>
                <div>POST DETAIL</div>
                {postDetail ? <PostDetail postDetail={postDetail} deletePost={deleteHandler}></PostDetail> : "No Post Selected"}

            </div>}
        </>


    )
}

export default Dashboard
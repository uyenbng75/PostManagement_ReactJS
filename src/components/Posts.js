import React, { useState } from 'react'
import Post from './Post';

const Posts = (props) => {
    /* const [posts, setPosts] = useState([
        {
            Id: 111,
            Title: 'Happiness',
            Author: 'John',
            Content: 'Content of 111'
        },
        {
            Id: 112,
            Title: 'MIU',
            Author: 'Dean',
            Content: 'Content of 112'
        },
        {
            Id: 113,
            Title: 'Enjoy Life',
            Author: 'Jasmine',
            Content: 'Content of 113'
        }
    ]) */

    // const selectedHandler = (post) => {
    //     props.selectedPost(post);
    // }

    const result = props.posts.map((p) => {
        return <Post post={p} key={p.id} selectedinPost={() => props.selectedPost(p)} />
    })
    return result;
}

export default Posts
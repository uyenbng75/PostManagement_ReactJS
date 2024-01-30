import React, { useState } from 'react'
import Post from '../components/Post'


const Posts = ({ selectedItem, data }) => {
    const selectedItemHandler = (post) => {
        selectedItem(post)
    }

    const posts = data.map(p => {
        return <Post
            id={p.id}
            title={p.title}
            author={p.author}

            onClickItem={selectedItemHandler(p)}
        />
    })

    return <>{posts}</>
}
    export default Posts
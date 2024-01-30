import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';

const Dashboard = () => {
  const [postDetail, setPostDetail] = useState(null);
  const [postState, setPostState] = useState([
    { id: 111, title: 'Happiness', author: 'John' },
    { id: 112, title: 'MIU', author: 'Dean' },
    { id: 113, title: 'Enjoy Life', author: 'Jasmine' }
  ])
  const [post, setPost] = useState({
    title: ""
  });

  const handlerOnChange = (event) => {
    setPost({ title: event.target.value });
  }

  const buttonClicked = () => {
    postState[0].title = post.title;
    setPostState([...postState])
  }

  useEffect(() => {
    if (postDetail)
      setPost(postDetail.title)
  }, [postDetail])

  const selectedHandler = (selectedItem) => {
    setPostDetail(selectedItem);
  }
  return (
    <div className='Dashboard'>
      <h1>Welcome to Dashboard</h1>
      <div className='row'>
        <Posts data={postState} selectedItem={selectedHandler} />
      </div>
      <div className='row'>
        <input type='text' value={post.title} onChange={handlerOnChange} />
        <button onClick={buttonClicked}>Change Name</button>
      </div>
    </div>
  );
}

export default Dashboard;

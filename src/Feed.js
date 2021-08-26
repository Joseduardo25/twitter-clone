import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>

      <TweetBox />

      
      <Post 
        displayName= 'Sonny Sangha'
        username='ssssangha'
        verified={true}
        text='YOOOOOO its working'
        avatar='https://pbs.twimg.com/profile_images/1420572812193026050/W8boMMDn_normal.jpg'
        image='https://pbs.twimg.com/media/E9unyiVXoAEiQxU?format=jpg&name=small'
      />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  )
}

export default Feed

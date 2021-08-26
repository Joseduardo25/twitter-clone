import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://pbs.twimg.com/profile_images/1420572812193026050/W8boMMDn_normal.jpg' />
      </div>
      <div className='post__body'>

      </div>
    </div>
  )
}

export default Post

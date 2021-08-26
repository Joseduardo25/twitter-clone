import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, FavoriteBorder } from '@material-ui/icons'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import RepeatIcon from '@material-ui/icons/Repeat'
import PublishIcon from '@material-ui/icons/Publish'
import React from 'react'
import './Post.css'

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://pbs.twimg.com/profile_images/1420572812193026050/W8boMMDn_normal.jpg' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Rafeh Qazi {''}
              <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' /> @cleverqazi
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>i challenge you to build a Twitter Clone with React!!!</p>
          </div>
        </div>
        <img 
          src='https://pbs.twimg.com/media/E9unyiVXoAEiQxU?format=jpg&name=small'
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleOutline fontSize='small'/>
          <RepeatIcon fontSize='small' />
          <FavoriteBorder fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post

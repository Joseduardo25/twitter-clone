import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Button } from '@material-ui/core'

function Sidebar () {
  return(
    <div className='sidebar'>
      {/* Twitter Icons */}
      <TwitterIcon className='sidebar__twitterIcon'/>

      {/* SidebarOption */}
      <SidebarOption active Icon={HomeIcon} text='Home'/>
      <SidebarOption Icon={SearchIcon} text='Explore'/>
      <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
      <SidebarOption Icon={MailOutlineIcon} text='Messages' />
      <SidebarOption Icon={BookmarkBorderIcon} text='Save' />
      <SidebarOption Icon={ListAltIcon} text='List' />
      <SidebarOption Icon={PermIdentityIcon} text='Perfil' />
      <SidebarOption Icon={MoreHorizIcon} text='More Options' />
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}

      {/* Button -> Tweet */}
      <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  ) 
}


export default Sidebar
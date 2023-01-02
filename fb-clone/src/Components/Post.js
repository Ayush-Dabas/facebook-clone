import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Post({ profilePic, image, username, timestamp, message}) {
    function hideImg() {
        document.getElementsByID("imageSRC")
                          .style.display = "none";
       }
  return (
    <div className = "post">
        <div className="post_top">
            <Avatar src={profilePic} className="post_avatar" />
            <div className="post_info">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
        <div className="post_bottom">
            <p>{message}</p>
        </div>
        <div className="post_image">
            <img id="imageSRC" src={image} onError="hideImg()" />
        </div>
        <div className="post_options">
            <div className="post_option">
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className="post_option">
                <ChatBubbleOutlineOutlinedIcon />
                <p>Comment</p>
            </div>
            <div className="post_option">
                <NearMeIcon />
                <p>Share</p>
            </div>
            <div className="post_option">
                <AccountCircleIcon/>
                <ExpandMoreOutlinedIcon />
                
            </div>
        </div>
    </div>
  )
}

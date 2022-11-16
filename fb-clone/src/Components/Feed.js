import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import StoryReel from "./StoryReel.js"

export default function Feed() {
  return (
    <div className="feed">
        {/* StoryReel */}
        <StoryReel />
        {/* MessageSender */}
        <MessageSender />

    </div>
  )
}

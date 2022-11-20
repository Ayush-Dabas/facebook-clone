import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from "./StoryReel.js"

export default function Feed() {
  return (
    <div className="feed">
        {/* StoryReel */}
        <StoryReel />
        {/* MessageSender */}
        <MessageSender />

        <Post 
          profilePic="https://wallpapercave.com/wp/wp11158994.png"
          image="https://i.kym-cdn.com/entries/icons/mobile/000/028/775/Screen_Shot_2019-03-06_at_4.32.48_PM.jpg" 
          username="DIO" 
          timestamp="This is a timestamp"
          message = "Ho you are approaching me !"
        />
        <Post 
          profilePic="https://www.gamerevolution.com/wp-content/uploads/sites/2/2022/10/chainsaw-man-episode-1-ending-explained-who-is-makima.jpg"
          image="https://media.tenor.com/Wm_baK52vHUAAAAC/jojo-jjba.gif" 
          username="Jhaatu" 
          timestamp="This is a timestamp"
          message = "Aaja tere tatto ka taaj mahal banau betichod"
        />
        <Post 
          profilePic="https://wallpapercave.com/wp/wp11158994.png"
          image="https://i.pinimg.com/originals/82/0d/6e/820d6e2987fba0de0040b5828397bda5.jpg" 
          username="DIO" 
          timestamp="This is a timestamp"
          message = "この　アホ　バカ　！"
        />
        <Post 
          profilePic="https://www.gamerevolution.com/wp-content/uploads/sites/2/2022/10/chainsaw-man-episode-1-ending-explained-who-is-makima.jpg"
          image="https://i.ytimg.com/vi/tVfUdoEj218/maxresdefault.jpg" 
          username="Jhaatu Dio ka baap" 
          timestamp="This is a timestamp"
          message = "ホ"
        />

    </div>
  )
}

import React,{useEffect, useState} from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from "./StoryReel.js"
import db from './fireBase'

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
          setPosts(snapshot.docs.map(doc => ({ id:doc.id, data: doc.data()})))
      ));
  } ,[]);
  return (
    <div className="feed">
        {/* StoryReel */}
        <StoryReel />
        {/* MessageSender */}
        <MessageSender />

        {posts.map(post =>(
          <Post 
              key = {post.id}
              profilePic = {post.data.profilePic}
              message = {post.data.message}
              timestamp = {post.data.timestamp}
              username = {post.data.username}
              image = {post.data.image}
          />
        ))}

        {/* <Post 
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
        /> */}

    </div>
  )
}

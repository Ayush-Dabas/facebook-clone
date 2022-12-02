import { Avatar } from '@mui/material'
import React ,{useState} from 'react'
import "./MessageSender.css"
import { useStateValue } from '../StateProvider';

import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import TagFacesIcon from '@mui/icons-material/TagFaces';

export default function MessageSender() {
    const [{user} , dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        // db stuff !!

        setInput("");
        setImageUrl("");
    };

  return (
    <div className='messageSender'>
        <div className="messageSender_top">
            <Avatar src = {user.photoURL}/>
            <form>
                <input
                value={input}
                onChange={e=>setInput(e.target.value)}
                className = "messageSender_input" placeholder={`What's on your mind , ${user.displayName} ?`} />
                <input
                value = {imageUrl}
                onChange = {e => setImageUrl(e.target.value)}
                placeholder= "Image URL (Optional)" />
                <button onClick = {handleSubmit} type="submit">Hidden submit</button>
            </form>
        </div>

        <div className="messageSender_bottom">
            <div className="messageSender_option">
                <VideocamIcon style={{color:"red"}} />
                <h3>Live Video</h3>
            </div>

            <div className="messageSender_option">
                <PhotoLibraryIcon style={{color:"green"}} />
                <h3>Photo/Video</h3>
            </div>

            <div className="messageSender_option">
                <TagFacesIcon style={{color:"orange"}} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>

    </div>
  )
}

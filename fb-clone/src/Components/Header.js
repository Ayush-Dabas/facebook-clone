import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"

export default function Header() {
  return (
    <div className="header">

      <div className='header_left'>

        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png" alt="could not load"></img>
        <div className="header_input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className='header_middle'></div>

      <div className='header_right'></div>

    </div>
  )
}

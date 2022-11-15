import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';

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

      <div className='header_middle'>
        <div className="header_option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleRoundedIcon fontSize="large" />
        </div>
      </div>

      <div className='header_right'></div>

    </div>
  )
}

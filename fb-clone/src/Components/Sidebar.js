import React from 'react'
import "./Sidebar.css";
import "./SidebarRow.js"
import SidebarRow from './SidebarRow.js';

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

export default function Sidebar() {
  return (
    <div className="Sidebar">
        <SidebarRow src = "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg" title = "Mr. Dio" />
        <SidebarRow Icon = {LocalHospitalIcon} title = "Covid-19 Information Center" />
        <SidebarRow Icon = {EmojiFlagsIcon}  title = "pages" />
        <SidebarRow Icon = {PeopleIcon}  title = "friends" />
        <SidebarRow Icon = {ChatIcon} title = "Messenger" />
        <SidebarRow Icon = {StorefrontIcon} title = "Marketplace" />
        <SidebarRow Icon = {VideoLibraryIcon} title = "Videos" />
        <SidebarRow Icon = {ExpandMoreOutlinedIcon} title = "MarketPlace" />

    </div>
  )
}

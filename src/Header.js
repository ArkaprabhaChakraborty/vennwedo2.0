import  Menu  from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from'@material-ui/icons/VideoCall'
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar/Avatar"
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header_left">
                <Menu/>
                <Link to="/live/">
                    <img className="header_logo" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/vennwedo2.0/main/assets/vennwedomini.svg" alt=""/>
                </Link>
            </div>
            <div className="header_input">
                <input
                onChange={(e)=> setInputSearch(e.target.value)}
                value={inputSearch} 
                placeholder="Search" type="text"/>
                <Link to={`/live/search/${inputSearch}`}>
                    <SearchIcon className="header_inputbutton"/>
                </Link>
            </div>
            <div className="header_right">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar className="header_icon"/>
            </div>
        </div>
    )
}

export default Header

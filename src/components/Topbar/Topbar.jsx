import React from 'react'
import './topbar.css'

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';


const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbar-left">
            <span className='logo'><Link to='/' style={{listStyle:"none",textDecoration:"none"}}>Lamasocial</Link></span>
        </div>
        <div className="topbar-center">
            <div className="search-bar">
                <SearchIcon/>
                <input type="text" placeholder='Search here..' className='topbar-search'/>
            </div>
        </div>
        <div className="topbar-right">
            <div className="topbar-links">
                <span className='topbar-link'><Link to='/profile' style={{listStyle:"none",textDecoration:"none",color:"inherit"}}>Profile</Link></span>
                <span className='topbar-link'><Link to='/login' style={{listStyle:"none",textDecoration:"none",color:"inherit"}}>Login</Link></span>
            </div>
            <div className="topbar-icons">
                <div className="topbar-icon">
                 <PersonIcon className='icon'/>
                 <span className='badge'>1</span>
                </div>
                <div className="topbar-icon">
                 <ChatIcon className='icon'/>
                 <span className='badge'>1</span>
                </div>
                <div className="topbar-icon">
                 <NotificationsIcon className='icon'/>
                 <span className='badge'>1</span>
                </div>
                
            </div>
            <img src="assets/person/1.jpeg" alt="" className='topbar-img'/>
        </div>
    </div>
  )
}

export default Topbar
import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import {users} from '../../dummyDatas'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-item">
           <RssFeedIcon className='sidebar-icon'/>
           <span className='sidebar-text'>Feed</span> 
          </li>
          <li className="sidebar-item">
           <RssFeedIcon className='sidebar-icon'/>
           <span className='sidebar-text'>Feed</span> 
          </li>
          <li className="sidebar-item">
           <RssFeedIcon className='sidebar-icon'/>
           <span className='sidebar-text'>Feed</span> 
          </li>
          <li className="sidebar-item">
           <RssFeedIcon className='sidebar-icon'/>
           <span className='sidebar-text'>Feed</span> 
          </li>
          <li className="sidebar-item">
           <RssFeedIcon className='sidebar-icon'/>
           <span className='sidebar-text'>Feed</span> 
          </li>
        </ul>
        <button className='sidebar-btn'>Show more</button>
        <hr className='sidebar-hr'/>
        <ul className="sidebar-friend">
          {users.map((user)=>
          {
            return(
<li className='sidebar-friend-item' key={user.id}>
          <img src={user.img} alt="" className='sidebar-friend-img'/>
          <span className='sidebar-friend-text'>{user.username}</span>
         </li>
            )
          })}
         
         
         <li className='sidebar-friend-item'>
          <img src="assets/person/2.jpeg" alt="" className='sidebar-friend-img'/>
          <span className='sidebar-friend-text'>John Doe</span>
         </li>
         <li className='sidebar-friend-item'>
          <img src="assets/person/2.jpeg" alt="" className='sidebar-friend-img'/>
          <span className='sidebar-friend-text'>John Doe</span>
         </li>
         <li className='sidebar-friend-item'>
          <img src="assets/person/2.jpeg" alt="" className='sidebar-friend-img'/>
          <span className='sidebar-friend-text'>John Doe</span>
         </li>
         <li className='sidebar-friend-item'>
          <img src="assets/person/2.jpeg" alt="" className='sidebar-friend-img'/>
          <span className='sidebar-friend-text'>John Doe</span>
         </li>
         <li className='sidebar-friend-item'>
          <img src="assets/person/2.jpeg" alt="" className='sidebar-friend-img'/>
          <span className='sidebar-friend-text'>John Doe</span>
         </li>
         <li className='sidebar-friend-item'>
          <img src="assets/person/2.jpeg" alt="" className='sidebar-friend-img'/>
          <span className='sidebar-friend-text'>John Doe</span>
         </li>
         <li className='sidebar-friend-item'>
          <img src="assets/person/2.jpeg" alt="" className='sidebar-friend-img'/>
          <span className='sidebar-friend-text'>John Doe</span>
         </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import './profile.css'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'

const Profile = () => {
  return (
    <div><Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profile-right">
      <div className="profile-right-top">
        <div className="profile-cover">
            <img src="assets/post/3.jpeg" className='img1' alt="" />
            <img src="assets/person/7.jpeg" alt="" className='img2'/>
        </div>
        <div className="profile-info">
            <h4>Safaq eulom</h4>
            <span>i kddf sddwd wdw</span>
        </div>
      </div>
      <div className="profile-right-bottom">

   
      <Feed profile={true}/>
      <Rightbar profile={true}/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
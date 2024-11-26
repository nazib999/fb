import React from 'react'
import './rightbar.css'
import {users} from '../../dummyDatas'

const Rightbar = ({profile}) => {
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        {profile?<></>:<div className="birthday-container">
          <img src="assets/gift.png" alt="" />
          <span><b>Poba bear</b> and <b>3 other friends</b> have a birthday today</span>

        </div>}
        <img src="assets/ad.png" className='rightbar-ad' alt="" />
        <h4 className='rightbar-title'>Online Freiends</h4>
        <ul className="rightbar-friend-list">
          {users.map((user)=>{
          return <li key={user.id} className="rightbar-friend">
          <div>
          <img src={user.img} alt="" />
          <span className='rightbar-friend-online'></span>
          </div>
          <span className='rightbar-username'>{user.username}</span>

        </li>

          })}
          
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
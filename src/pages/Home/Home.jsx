import React from 'react'
import './home.css'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'

const Home = () => {
  return (
    <div><Topbar/>
    <div className="main-container">
      
     <div className="first"> <Sidebar/></div>
      
  
     <Feed/>
  
     
      <div className="last"><Rightbar/></div>

    </div>
    </div>
  )
}

export default Home
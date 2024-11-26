import React from 'react'
import Home from './pages/Home/Home'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter basename='/fb/'>
      <Routes>

          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
         
          
       
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
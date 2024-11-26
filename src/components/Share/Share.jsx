import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className='share'>
        <div className="share-wrapper">
            <div className="share-top">
                <img src="assets/person/1.jpeg" className='share-profile-img' alt="" />
                <input type="text" placeholder="What's your mind?" className='share-input'/>
            </div>
            <hr className='share-hr'/>
            <div className="share-bottom">
            <div className="share-options">
                <div className="share-option">
                    <PermMediaIcon htmlColor='crimson' className='share-icon'/>
                    <span style={{width:"70px"}} className='share-text'>Photo <br /> or image </span>
                </div>
                <div className="share-option">
                    <TurnedInIcon htmlColor='orange' className='share-icon'/>
                    <span className='share-text'>Tag something..</span>
                </div>
                <div className="share-option">
                    <EmojiEmotionsIcon htmlColor='purple' className='share-icon'/>
                    <span className='share-text'>Feeling</span>
                </div>
                <div className="share-option location">
                    <LocationOnIcon htmlColor='green' className='share-icon'/>
                    <span className='share-text'>Location</span>
                </div>
            </div>
            <button className='share-btn'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share
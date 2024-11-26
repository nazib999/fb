import React, { useState } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { users } from '../../dummyDatas'

const Post = ({ post }) => {
  const { id, like, photo, userId, des, comment, date } = post;
  const [kike,setLike] = useState(like);
  const [isLike,setIsLike] = useState(false);

  const handleLike=()=>{
    setLike(isLike?kike-1:kike+1);
    setIsLike(!isLike)
  }

  // Corrected typo and added safety check for user
  const user = users.find((user) => user.id === userId);

 // Logs the user object to the console

  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img src={user ? user.img : "assets/person/default.jpg"} alt="" />
            <span className='post-user'>{user ? user.username : "Unknown User"}</span>
            <span className='post-date'>{date}</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post-center">
          <span>{des}</span>
          <img src={photo} alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="assets/like.png" onClick={handleLike} className='like-icon' alt="" />
            <img src="assets/heart.png" onClick={handleLike} className='like-icon' alt="" />
            <span>{kike} people like this</span>
          </div>
          <div className="post-bottom-right">
            <span>{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;

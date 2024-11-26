import React from 'react'
import './feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import {posts} from '../../dummyDatas'

const Feed = ({profile}) => {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
      {profile?<></>:<Share/>}
      {posts.map((post,i)=><Post key={i} post={post}/>)}
      
     
      </div>
     
    </div>
  )
}

export default Feed
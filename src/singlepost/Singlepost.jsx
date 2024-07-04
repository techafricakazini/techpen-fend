import React from 'react'
import './SinglePost.css'
import SingleImg from '../assets/pic (2).jpg'

export default function Singlepost() {
  return (
    <div className='singlePost'>
     <div className="singlePostWrapper">
      <img src={SingleImg}alt="" className="singlePostImg" />
     </div>
     <h1 className="singlePosttitle">Lorem ipsum dolor sit amet consectetur.</h1>
    </div>
  )
}

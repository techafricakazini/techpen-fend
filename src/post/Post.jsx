import React from 'react'
import './Post.css'
import pict from  '../assets/pic (1).jpg'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src={pict} alt=''/>
        <div className="postInfo">
            <div className="postCats">
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>
                Lorem ipsum dolor sit amet.
            </span>
            <hr/>
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quam facilis ea ex quisquam voluptatem ipsum animi voluptate! Atque quibusdam veritatis sunt ratione a sequi qui, dolorem voluptas totam quasi eligendi inventore illum et cumque rerum veniam cum asperiores pariatur. Nisi enim harum, non ad autem voluptate laborum corrupti nesciunt magnam aperiam aliquam eveniet, odio reprehenderit iste dolorem quibusdam possimus?</p>
      
    </div>
  )
}

import React from 'react'
import '../styles/Header.css'
import Img from '../assets/blogIntro.jpg'

export default function Header() {
  return (
    <div className='header mt-5'>
     <div className="headerTitles">
        <span className='headerTitleSm'>Daltech & Dalty</span>
        <span className='headerTitleLg'>Blog</span>
     </div>
     <img className='headerImg' src={Img} alt=''/>
    </div>
  )
}

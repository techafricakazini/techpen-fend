import React from 'react'
import '../styles/Header.css'
import Img from '../assets/blogIntro.jpg'

export default function Header() {
  return (
    <div className='header'>
     <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
     </div>
     <img className='headerImg' src={Img} alt=''/>
    </div>
  )
}

import React from 'react'
import "../styles/TopBar.css"
import blog from '../assets/blogyou.jpg'

export default function TopBar() {
  return (
    <div className="top">
     <div className='topLeft'>
     <i className="topIcon fa-brands fa-facebook"></i>
     <i className="topIcon fa-brands fa-square-instagram"></i>
     <i className="topIcon fa-brands fa-pinterest"></i>
     <i className="topIcon fa-brands fa-tiktok"></i>
     </div>
     <div className='topCenter'>
      <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
      </ul>
     </div>
     <div className='topRight'>
     <img className='topImg' src={blog} alt=''/>
     <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
     </div>
    </div>
  )
}

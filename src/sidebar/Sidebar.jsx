import React from 'react'
import '../styles/Sidebar.css'
import profile from '../assets/blogyou.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarItem">
       <span className="sidebarTitle">ABOUT US</span>
       <img className='Img' src={profile} alt=''/>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid dolorem minima culpa.</p>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Sports</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
     <i className="topIcon fa-brands fa-facebook"></i>
     <i className="topIcon fa-brands fa-square-instagram"></i>
     <i className="topIcon fa-brands fa-pinterest"></i>
     <i className="topIcon fa-brands fa-tiktok"></i>
      </div>
    </div>
     </div>
    </div>
  )
}

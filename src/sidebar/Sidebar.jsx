import React from 'react'
import '../styles/Sidebar.css'
import profile from '../assets/blogyou.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar mt-5'>
     <div className="sidebarItem">
       <span className="sidebarTitle">ABOUT US</span>
       <img className='Img' src={profile} alt=''/>
       <p>With Daltech & Dalty your content is primed for blast off. Don't miss your chance to join the stars - register today and fuel your blog to new heights!</p>
    <div className="sidebarItem mt-5">
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

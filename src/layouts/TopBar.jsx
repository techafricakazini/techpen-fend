import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import { appLinks } from "../constants/Links";
import menu from "../assets/Menub.gif"
import '../styles/TopBar.css'
export default function TopBar() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
   
    <nav className="navbar navbar-expand-lg container bg-transparent me-auto justify-content-end w-100 ">
    <div className="desktopMenu">

     
      <div className="">
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link to={appLinks?.Home} className="navbar-brand bg-light active text-uppercase fs-3">
        Home
        </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link  text-secondary active text-uppercase fs-3" to={appLinks?.About}>
             About Us
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-secondary active text-uppercase fs-3" to={appLinks?.Write}>
             Write
            </Link>
          </li>
          
          <li className="nav-item">
           <Link className="nav-link text-secondary active text-uppercase fs-3" to={appLinks?.Contact}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-secondary active text-uppercase fs-3" to={appLinks?.Userprofile}>
          <i class="bi bi-person-fill"></i>
            </Link>

        </li>
        </ul>
        </div>
      </div>

   
   
<img src={menu} alt="Menu" className="mobileMenu" onClick={()=>setShowMenu(!showMenu)}/>
<div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>

 <Link className="nav-link text-light" to={appLinks?.Home} onClick={()=>setShowMenu(false)}>Home</Link>
 <Link className="nav-link text-light" to={appLinks?.About} onClick={()=>setShowMenu(false)}>About Us</Link>
 <Link className="nav-link text-light" to={appLinks?.Write} onClick={()=>setShowMenu(false)}>Write</Link>
 <Link className="nav-link text-light" to={appLinks?.Contact} onClick={()=>setShowMenu(false)}>Contact Us</Link>  
 <Link className="nav-link text-light" to={appLinks?.Userprofile} onClick={()=>setShowMenu(false)}><i class="bi bi-person-fill"></i>
 </Link>

 </div>
  </nav>
  )
}

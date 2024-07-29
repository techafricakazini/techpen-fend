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
          <div class="btn-group">
            <Link className='nav-link text-secondary active text-uppercase fs-3'>
            <button className="btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             <i className="bi fs-4 bi-person-fill "></i>
             Account
               </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className=" text-uppercase fs-4" to={appLinks?.Register}>
                       <i className="bi bi-person-add fs-5 me-2">
                       </i>
                           Sign in
                     </Link>
                  </li>
                  <li>
                      <Link className=" text-uppercase fs-4" to={appLinks?.Login}>
                       <i className="bi bi-person-fill fs-5 me-2">
                       </i>
                           Log in
                     </Link>
                    </li> 
                    <hr />

                    <li>
                     <Link className=" text-uppercase fs-4" to={appLinks?.UserProfile}>
               <i className="bi bi-gear-fill fs-5 me-2">
                </i>
                  Settings
                   </Link>   
               </li>
            </ul>
        </Link>
       </div>
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
 <Link className='nav-link  text-light'><button className="btn btn-lg btn-l dropdown-toggle  text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="bi bi-person-fill"></i>
    Account
      </button>
        <ul className="dropdown-menu ">
          <li>
            <Link className=" text-uppercase fs-4" to={appLinks?.Register}>
               <i className="bi bi-person-add fs-5 me-2">
                </i>
                  Sign in
              </Link>
             </li> 
             <li>
            <Link className=" text-uppercase fs-4" to={appLinks?.Login}>
               <i className="bi bi-person-fill fs-5 me-2">
                </i>
                  Login
              </Link>
             </li>

             <hr />

             <li>
            <Link className=" text-uppercase fs-4" to={appLinks?.UserProfile}>
               <i className=" bi bi-gear-fill fs-5 me-2">
                </i>
                  Settings
              </Link>
             </li>  
          </ul>
     </Link>
 </div>
  </nav>
  )
}

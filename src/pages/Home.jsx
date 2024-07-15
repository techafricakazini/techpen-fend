import React from 'react'
import Header from '../layouts/Header'
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar'
import Login from '../login/Login'
import Register from '../register/Register'

export default function Home() {
  return (
    <>
     <Header/>
    <div className='home  container mt-5'>
      <Login/>
      <Register/>
      <Posts/> 
      <Sidebar/>

      
    </div>
    </>
  )
}

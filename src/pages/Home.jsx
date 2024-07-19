import React from 'react'
import Header from '../layouts/Header'
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar'

export default function Home() {
  return (
    <>
     <Header/>
    <div className='home  container mt-5'>
      <Posts/> 
      <Sidebar/>
    </div>
    </>
  )
}

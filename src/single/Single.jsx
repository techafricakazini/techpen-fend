import React from 'react'
import './Single.css'
import Sidebar from '../sidebar/Sidebar'
import Singlepost from '../singlepost/Singlepost'
export default function Single() {
  return (
    <div className='single'>
     <Singlepost/>
       <Sidebar/>
      
    </div>
  )
}

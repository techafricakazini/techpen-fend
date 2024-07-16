import React from 'react'
import '../styles/Write.css'
import wrimage from '../assets/blogIntro.jpg'

export default function Write() {
  return (
    <div className='write mt-5'>
        <img src={wrimage} alt="" className="writeImg mt-5" />
      <form className='writeForm'>
        <div className="writeFormGroup mt-5">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus mt-5"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder='Title' className='writeInput mt-5' autoFocus={true}/>
        </div>
        <div className="writeFormGroup mt-5">
          <textarea placeholder='Tell your story' type="text" className='writeInput writeText text-sm '></textarea>
       
        <button className='writeSubmit mt-5'>Publish</button>
        </div>
      </form>
      
    </div>
  )
}

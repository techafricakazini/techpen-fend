import React from 'react'
import '../styles/SinglePost.css'
import SingleImg from '../assets/pic (2).jpg'

export default function Singlepost() {
  return (
    <div className='singlePost mt-5'>
     <div className="singlePostWrapper">
      <img src={SingleImg}alt="" className="singlePostImg" />
       <h1 className="singlePosttitle">Lorem ipsum dolor sit amet consectetur.
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
       </h1>
       <div className="singlePostInfo">
        <span className='singlePostAuthor'>Author: <b>Dalienst</b></span>
        <span className='singlePostdate'>1 hour ago</span>
       </div>
       <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit voluptas totam excepturi ipsa voluptate dolorum laboriosam iusto exercitationem quae. Soluta consectetur distinctio doloremque laborum ipsum perspiciatis, deserunt voluptatum commodi. Eius nihil facilis harum at laboriosam mollitia delectus, aut rerum tenetur id cum voluptatem modi nam impedit officiis quod quo unde iure quidem ut accusantium? Amet ipsum molestiae nemo provident veniam earum non porro aperiam fuga, incidunt sequi eaque odit inventore illum, at dolore reiciendis a unde debitis id optio totam! Sequi laudantium mollitia praesentium nam aliquam numquam maiores voluptatibus sapiente non voluptatum est dolorum obcaecati dignissimos minus rerum explicabo rem omnis possimus adipisci placeat modi, accusantium alias iure. Ratione inventore ipsum sequi veritatis molestias aperiam accusamus quibusdam! Cum animi possimus iure cupiditate rem dolore vel eveniet natus distinctio ullam? Eveniet delectus ipsum quas quia beatae, at voluptatem deserunt incidunt nesciunt, porro nisi rerum, quasi voluptates magni ipsa libero laboriosam consequuntur debitis. Repudiandae corrupti nihil adipisci, repellendus porro similique ex dolor quod perspiciatis pariatur consequuntur ullam at cumque sunt atque quos et praesentium quisquam dolorum ducimus minima! Illum, sit pariatur!</p>
     </div>
    
    
    </div>
  )
}

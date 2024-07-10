import React from 'react'
import '../styles/About.css'
import About1 from '../assets/pic (1).jpg'
export default function About() {
  return (
    <div className='about-page'>
     <header className='mt 5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
        <h1 className='text-light'>About</h1>
        </div>
     </header>    

     <div className='container my-5'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quisquam nam quibusdam voluptas nihil, sunt adipisci beatae incidunt quae neque minus. Quos quidem quia molestiae recusandae rerum omnis minus pariatur aliquam voluptatem maiores. Voluptates quod quae, ipsam aliquid corporis, quisquam vel pariatur debitis, laudantium iste dignissimos praesentium error hic quibusdam. Maxime explicabo consequuntur impedit earum, ad ipsam! Necessitatibus sit dolorem, cum hic fugiat rem vel, excepturi ea, in quis quae vero laborum! Quia minima maiores, quidem saepe impedit quis ab molestiae pariatur iure, illum doloribus voluptates, blanditiis similique. Eveniet, maxime!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit praesentium iste quod, voluptatum voluptatem obcaecati sunt sit est non id natus fugit dolorum ea magnam voluptates nam et amet saepe consequatur doloribus hic accusamus. Nulla reprehenderit assumenda debitis natus quibusdam quae nostrum nesciunt incidunt quasi excepturi, obcaecati exercitationem voluptatum pariatur porro voluptas inventore iusto. Harum, tempora quas ab officia consequatur magni quasi reprehenderit excepturi cum vero illo qui maiores voluptatibus perspiciatis, autem, nesciunt accusantium eius atque rerum velit neque!</p>

        <div className='row'>
            <div className='col-lg-6'>
                <img src={About1} className='img-fluid my-4' alt=""/>
            </div>
           
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus illo quaerat quisquam eligendi magni maxime ipsam beatae cum quo! Dolor blanditiis harum esse magni ullam vel exercitationem quae quia, laboriosam sint et sit eum a consequuntur voluptatem corrupti enim animi repellat consectetur minima fuga. At, incidunt aliquam tempore voluptate maxime, deserunt cum totam consectetur voluptatem eaque laboriosam voluptatibus. Et a magni commodi ducimus asperiores explicabo, pariatur fugit exercitationem, quia neque dolore similique. Iure, necessitatibus quae.</p>
     </div> 

     <div className='bg-dark text-light'>
        
     </div>

     <div className='my-5'>
      
     </div>
    </div>
  )
}

import React from 'react'
import '../styles/About.css'
import About1 from '../assets/pic (1).jpg'
export default function About() {
  return (
    <div className='about-page'>
     <header className='mt 5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
        <h1 className='text-dark'>About Us</h1>
        </div>
     </header>    

     <div className='container my-5'>
        <p className='lead'>Rise to the Top with Daltech & Dalty!

Looking to propel your blog to new heights? Daltech & Dalty is the rocket fuel that will launch your content into orbit. Blast off from outdated blogging software that's gone bust and break free from clunky interfaces that leave your posts grounded.

With Daltech & Dalty, publishing is a breeze. Our state-of-the-art editor empowers you to flex your creative muscles while formatting tools sculpt your content into a lean, mean blogging machine. Stories schedule themselves to ensure your readership is always engaged.

</p>

        <div className='row'>
            <div className='col-lg-6'>
                <img src={About1} className='img-fluid my-4' alt=""/>
            </div>
           
        </div>
        <p className='lead'>Ditch drab defaults and dress up your domain in one of Daltech & Dalty's star-studded designs. Templates are infinitely adaptable like liquid leggings, shape-shifting to any device. Customization options let you add your own personal flair.

Say sayonara to storage limits and adieu to analytics agony. Our spacious hosting handles your rapidly growing repository with room to spare. While our polished performance keeps pages loading lightspeed no matter your readership.

Blast off on management missions through our cockpit-style dashboard. Integrations fire up fan engagement across the social sphere. Monetizing modules mean you can turn passion into profit.

SEO is a breeze thanks to BlogStar's strategic structuring and optimization thrusters. Our internal interlinking injects engine juice while maps streamline discovery. Mobile apps mean your blog is always within arm's reach, whether you fancy fiddling or just fancying the figures.

Don't just hover at the edges of blogosphere success. With Daltech & Dalty your content is primed for blast off. Don't miss your chance to join the stars - register today and fuel your blog to new heights!</p>
     </div> 

     <div className='bg-dark text-light'>
        
     </div>

     <div className='my-5'>
      
     </div>
    </div>
  )
}

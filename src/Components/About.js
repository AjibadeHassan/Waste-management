import React from 'react';
import Logo from '../Assets/Profile.png'
import Logo1 from '../Assets/newhome.jpg'
import Footer from './Footer';

const About = () => {
  return (
    <div className='About_container'>
       <div className='About_Top'>
       <section className='About_Img__container'>
          <img src={Logo} alt='profile'/>
        </section>
        <section className='About_Text'>
          <h1>We've  got what you need!</h1>
          <p>
Blockages are usually a sign that the sewage disposal system
 either requires maintenance or repair. If your septic system has
  a blockage or is full you could be experiencing the following:
   – Toilets running slow – Shower is running slow – A smell coming
    up from the septic air vent or drain – Excessive grass growth around the
     septic tank – Sewage coming out the air vent or the drains. If you are 
     experiencing any of the symptoms above call us now on. We are concerned with
your septic tank evacuation. We cover all over lagos. We are prompt.
           </p>
<h3>Our Services has been Unmatched</h3>
</section>
</div>

<div className='About_Top'>
  <section className='About_Text'>
    <h1>Our Mission</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
       molestias minus fugiat sit quaerat eligendi excepturi dolores commodi voluptates fugit beatae maxime
       accusamus quis blanditiis nobis accusantium, magni ex minima?</p>
  </section>
  <section className='About_Img__container'>
    <img src={Logo1} alt='a pix'/>
  </section>
</div>

<div className='About_Top'>
<section className='About_Img__container'>
    <img src={Logo1} alt='a pix'/>
  </section>
  <section className='About_Text'>
    <h1>Our Vision</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
       molestias minus fugiat sit quaerat eligendi excepturi dolores commodi voluptates fugit beatae maxime
       accusamus quis blanditiis nobis accusantium, magni ex minima?</p>
  </section>
</div>

<Footer/>

    </div>
  )
}

export default About
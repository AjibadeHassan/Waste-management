import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Assets/Profile.png'


const Abouthome = () => {
  const Nav = useNavigate()
 
  return (
    <div className='Abouthome_container' id="About">
      <h1>About Us</h1>
       <div className='Abothome_Div'>
       <section className='Img_container'>
          <img src={Logo} alt='profile'/>
        </section>
        <section className='About_Info'>
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
       <span onClick={()=> Nav('About')} className='More_Btn About_btn'>See More...</span>
    </div>
  )
}

export default Abouthome
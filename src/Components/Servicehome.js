import React from 'react'
import { MdOutlineHighQuality,MdBlock } from 'react-icons/md'
import { BsTrash,BsLaptop } from 'react-icons/bs'
import { GiSpanner } from 'react-icons/gi'
const Servicehome = () => {
  return (
    <div className='Servicehome_container' id="Services">
      <h1>Our Services</h1>
      <p>Fumi Sewage Services provide the widest range of Sewage 
        treatment and waste disposal of hazardous and non hazardous waste.</p>
       <div className='Serv_cards'>
       <section className='Servicehome_Card'>
        <BsTrash className='Serv_icon'/>
        <h3>Sewage Disposal</h3>
          <p>We handle domestic and industrial
             waste in liquid, solid or sludge.</p>
        </section>
        <section className='Servicehome_Card'>
         
          <MdOutlineHighQuality className='Serv_icon'/>
          <h3>Quality Products</h3>
          <p>We offer guaranteed goods on our products</p>
        </section>
        <section className='Servicehome_Card'>
          
          <MdBlock className='Serv_icon'/>
          <h3>Sewage Blockages</h3>
          <p>We open up sewage blockages along the tracks and pack
             the solid waste at a negotiable fee on site.</p>
        </section>
        <section className='Servicehome_Card'>
         
          <BsLaptop className='Serv_icon'/>
          <h3>Up To Date</h3>
          <p>All dependencies are kept current
             to keep things fresh.</p>
        </section>
        <section className='Servicehome_Card'>
          <GiSpanner className='Serv_icon'/>
          <h3>We Solve Issues Like:</h3>
          <p>Toilets running slow, Shower is running slow,
             Excessive grass growth around the septic tank etc.</p>
        </section>
       </div>
    </div>
  )
}

export default Servicehome
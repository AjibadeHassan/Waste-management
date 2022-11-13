import React from 'react'
import Abouthome from './Abouthome'
import Homepage from './Homepage'
import { IoIosCall } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import Servicehome from './Servicehome'
import Contacthome from './Contacthome'
const Main = () => {
  return (
    <div>
        <Homepage/>
        <Abouthome/>
        <Servicehome/>
        <Contacthome/>
        <div className='Reach_out'>
          <IoIosCall className='Reach_out__icons'/>
          <BsWhatsapp className='Reach_out__icons'/>
        </div>
    </div>
  )
}

export default Main
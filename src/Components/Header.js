import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Mobile from './Mobile'


const Header = () => {
    const Nav = useNavigate()
    const [show,setShow] = useState(false)
  return (
    <div className='Header_container'>
        <div className='Image_container'>
            <h1>Fumi</h1>
            <span>sewage management services</span>
        </div>
        <ul className='Nav_list'>
            <li onClick={()=>{ Nav('/')
            window.location.reload()
        }}>Home</li>
            <li onClick={()=> Nav('About')}>About</li>
            <li onClick={()=> Nav('Services')}>Services</li>
            <li onClick={()=> Nav('ContactUs')}>Contact Us</li>
        </ul>
        <div onClick={()=> setShow(!show)} className='Nav_Menu'>Menu</div>
        {show? <Mobile/> : null}
    </div>
  )
}

export default Header
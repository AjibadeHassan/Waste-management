import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mobile = () => {
    const Nav = useNavigate()
  return (
    <div className='Mobile_nav'>
         <li onClick={()=>{ Nav('/')
            window.location.reload()
        }}>Home</li>
            <li onClick={()=> Nav('About')}>About</li>
            <li onClick={()=> Nav('Services')}>Services</li>
            <li onClick={()=> Nav('ContactUs')}>Contact Us</li>
    </div>
  )
}

export default Mobile
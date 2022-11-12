import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Mobile from './Mobile'


const Header = () => {
    const Nav = useNavigate()
    const [show,setShow] = useState(false)
    const [vary, setVary] = useState('Header_container Orange_Header')
    const Pos = function(){
        const first =  window.pageYOffset
        if(first >= 550 && first < 1200) {
            setVary('Header_container White_Header')
        } else if(first >= 600) {
            setVary('Header_container Orange_Header')
        }
         else {
            setVary('Header_container Orange_Header')
        }
         console.log(first)
        }
      
        window.addEventListener('scroll', Pos, true)
  return (
    <div className={vary}>
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
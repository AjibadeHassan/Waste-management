import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Mobile from './Mobile'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const Nav = useNavigate()
    const [show,setShow] = useState(false)
    const [vary, setVary] = useState('Header_container Orange_Header')
    const [icon, setIcon] = useState('Nav_Menu White_menu')
    const Pos = function(){
        const first =  window.pageYOffset
        if(first >= 550 && first < 1200) {
            setVary('Header_container White_Header')
            setIcon('Nav_Menu Orange_menu')
        } else if(first >= 600) {
            setVary('Header_container Orange_Header')
            setIcon('Nav_Menu White_menu')
        }
         else {
            setVary('Header_container Orange_Header')
            setIcon('Nav_Menu White_menu')
        }
        //  console.log(first)
        }
      
        window.addEventListener('scroll', Pos, true)
  return (
    <header className={vary}>
        <div className='Image_container'>
            <h1>Fumi</h1>
            <span>sewage management services</span>
        </div>
        <ul className='Nav_list'>
            <li onClick={()=>{ Nav('/')
            window.location.reload()
        }}>Home</li>
            <li onClick={()=> Nav('About')}>About</li>
            <li onClick={()=> Nav('Products')}>Products</li>
            <li></li>
        </ul>
        <div onClick={()=> setShow(!show)} className={icon}>
            <AiOutlineMenu/>
        </div>
        {show? <Mobile/> : null} 
    </header>
  )
}

export default Header
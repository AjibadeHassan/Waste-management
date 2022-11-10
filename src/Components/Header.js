import React from 'react'

const Header = () => {
  return (
    <div className='Header_container'>
        <div className='Image_container'>
            <h1>Fumi</h1>
            <span>sewage management services</span>
        </div>
        <ul className='Nav_list'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
        </ul>
        <div className='Nav_Menu'>Menu</div>
    </div>
  )
}

export default Header
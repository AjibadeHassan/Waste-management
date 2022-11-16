import React from 'react'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
  const Nav = useNavigate()
  return (
    <footer className='Footer_container'>
        <section className='Sitemap'>
            <h1>Sitemap</h1>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
        </section>
        <section className='Footer_contact'>
            <h1>Address</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
       molestias minus fugiat sit quaerat eligendi excepturi dolores commodi voluptates fugit beatae maxime
       accusamus quis blanditiis nobis accusantium, magni ex minima?</p>
        </section>
        <section className='Sitemap'>
          <p onClick={()=> Nav('Admin-login')}>Copyright © 2022 - Fumi Sewage Services</p>
        </section>
    </footer>
  )
}

export default Footer
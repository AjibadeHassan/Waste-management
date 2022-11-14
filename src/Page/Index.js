import React from 'react'
// import Homepage from '../Components/Homepage'
import '../Css/Style.css'
import '../Css/Mobile.css'
import { IoIosCall } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import Header from '../Components/Header'
import About from '../Components/About'
import Products from '../Components/Products'
import Contact from '../Components/Contact'
import Totop from '../Components/Totop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../Components/Main'
import Footer from '../Components/Footer'

const Index = () => {
  return (
    <div>
      <Router>
      <Totop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Products' element={<Products/>}/>
        <Route path='ContactUs' element={<Contact/>}/>
      </Routes>
      <Footer/>
      <IoIosCall className='Reach_out__icons__1'/>
          <BsWhatsapp className='Reach_out__icons'/>
      </Router>
    </div>
  )
}

export default Index
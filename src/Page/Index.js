import React from 'react'
// import Homepage from '../Components/Homepage'
import '../Css/Style.css'
import '../Css/Mobile.css'
import { IoIosCall } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import Header from '../Components/Header'
import About from '../Components/About'
import Products from '../Components/Products'
// import Contact from '../Components/Contact'
import Totop from '../Components/Totop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../Components/Main'
// import Footer from '../Components/Footer'
import Adminlogin from '../Components/Adminlogin'
import AdminDash from '../Components/AdminDash'
// import { HashLink as Link } from 'react-router-hash-link'
import { ExternalLink as Link } from 'react-external-link'
const Index = () => {
  return (
    <div className='Index_container'>
      <Router>
      <Totop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Products' element={<Products/>}/>
        <Route path='Admin-login' element={<Adminlogin/>}/>
        <Route path='Admin-login/AdminDash' element={<AdminDash/>}/>
      </Routes>
      {/* <Footer/> */}
      <Link href='tel:+2348037854920'>
      <IoIosCall className='Reach_out__icons__1'/>
      </Link>
      <Link href='https://api.whatsapp.com/send/?phone=%2B2349079709011&text&type=phone_number&app_absent=0'>
          <BsWhatsapp className='Reach_out__icons'/>
          </Link>
      </Router>
    </div>
  )
}

export default Index
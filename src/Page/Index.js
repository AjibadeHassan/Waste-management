import React from 'react'
// import Homepage from '../Components/Homepage'
import '../Css/Style.css'
import '../Css/Mobile.css'
import Header from '../Components/Header'
import About from '../Components/About'
import Service from '../Components/Service'
import Contact from '../Components/Contact'
import Totop from '../Components/Totop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../Components/Main'

const Index = () => {
  return (
    <div>
      <Router>
      <Totop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Services' element={<Service/>}/>
        <Route path='ContactUs' element={<Contact/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default Index
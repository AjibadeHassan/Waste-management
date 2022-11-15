import React from 'react'
import Abouthome from './Abouthome'
import Homepage from './Homepage'
import Servicehome from './Servicehome'
import Contacthome from './Contacthome'
// import AdminDash from './AdminDash'
const Main = () => {
  return (
    <div>
        <Homepage/>
        <Abouthome/>
        <Servicehome/>
        <Contacthome/>
        {/* <AdminDash/> */}
    </div>
  )
}

export default Main
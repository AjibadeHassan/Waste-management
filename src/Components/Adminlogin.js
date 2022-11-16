import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../lib/Base'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {
  const Nav = useNavigate()
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [api, setApi] = useState([])
     getAdmin()

    function getAdmin(){
      const admincollectionRef = collection(db,'admindata')
      getDocs(admincollectionRef)
      .then(response =>{
        const mydata = response.docs.map(doc=>({
          data: doc.data(),
          id: doc.id

        }))
        setApi(mydata)
      })
    }
   


    const VerifyAdmin = (e)=> {
      e.preventDefault()
      const Data = api[0].data;
      const getEmail = Data.email
      const getPass = Data.password
      if(!mail || !pass) {
        return
      }  else if(mail === getEmail && pass === getPass) {
        Nav('AdminDash')
      } else{
        return
      }
    }
  return (
    <div className='Adminlog_container'>
        <h1>Login As Administrator </h1>
        <form onSubmit={VerifyAdmin} className='Admin_verify'>
            <input type='email' value={mail} onChange={e=> setMail(e.target.value) } placeholder='Email Address' />
            <input type='password' value={pass} onChange={e=>setPass(e.target.value)} placeholder='Password' />
            <button className='Order_btn Logbtn' type='submit'>login</button>
        </form>
    </div>
  )
}

export default Adminlogin
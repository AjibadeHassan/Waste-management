import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../lib/Base'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Adminlogin = () => {
  const Nav = useNavigate()
    const [user, setuser] = useState('')
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
      const getuser = Data.username
      const getPass = Data.pass
      const optimisedpass = pass.toLowerCase()
      console.log(getuser, getPass)
      if(!user || !pass) {
        alert('User not authorised')
      }  else if(user === getuser && optimisedpass === getPass) {
        Nav('AdminDash')
      } else{
        // alert('fill in your data')
        return
      }
    }
  return (
    <div className='Adminlog_container'>
        <h1>Login As Administrator </h1>
        <form onSubmit={VerifyAdmin} className='Admin_verify'>
            <input type='name' value={user} onChange={e=> setuser(e.target.value) } placeholder='username' />
            <input type='password' value={pass} onChange={e=>setPass(e.target.value)} placeholder='Password' />
            <button className='Order_btn Logbtn' type='submit'>login</button>
        </form>

        <Footer/>
    </div>
  )
}

export default Adminlogin
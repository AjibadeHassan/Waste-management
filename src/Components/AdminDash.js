import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../lib/Base'
import Footer from './Footer';

const AdminDash = (e) => {
   
    // const delcollectionRef = collection(db, 'equipments')
   
   
    // function deleteEquipment(id){
    //     deleteDoc(equipcollectionRef, id)
    //     .then(()=> console.log('Item deleted'))
    //     .catch(err=> console.log(err))
    // }
    const equipcollectionRef = collection(db, 'equipments')
     const [equipments, setequipments] = useState([])
        getEquipments()
    
        
   
        
      
    
    useEffect(()=>{
        console.log(equipments)
    },[equipments])
    
 function getEquipments(){
        getDocs(equipcollectionRef, 'equipments')
        .then(response=>{
            console.log(response)
            const equip = response.docs.map(doc=> ({
                data: doc.data(),
                id: doc.id,
            }))
            setequipments(equip)
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (name === '' || price === '') {
            return
        }
        // alert(name)
        // alert(price)
        const myData = {
            name: name,
            price: price
        }
        addDoc(equipcollectionRef, myData)
        .then(response=>{
            console.log(response.id)
        }).catch(err=> console.log(err.message))
        // window.location.reload()
    } 
    const[name,setName] = useState('')
    const [price, setPrice] =useState('')
    // console.log(setName(), name)
  return (
    <div className='Admin_container'>
        <h1>My products</h1>
        <div className='Admin_prod__container'>
            {
                equipments.map((props)=>(
                    <section className='Product_Card'key={props.id}>
                    <img src='' alt='a pix' />
                    <h3> {props.data.name} </h3>
                    <p> #{props.data.price} </p>
                    <button className='Order_btn'>Update Price</button>
                    <button  className='Delete_btn'>Delete</button>
                </section>
                ))
            }
        </div>
        <h1>Upload Product</h1>
        <form className='Upload_form' onSubmit={handleSubmit}>
          
        <input  value={name} placeholder='Product Name' onChange={e=> setName(e.target.value)} type='text' />
        <input  value={price} placeholder='Price' onChange={e=> setPrice(e.target.value)} type='number' />
            <button className='Order_btnn' type='submit'>Submit</button>
        </form>
        <Footer/>
    </div>
  )
}

export default AdminDash
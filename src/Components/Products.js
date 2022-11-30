import React, { useEffect, useState } from 'react'
import {collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/Base'
import { ExternalLink as Link } from 'react-external-link'
import Footer from './Footer'

const Products = () => {
    const [equipments, setequipments] = useState([])
    useEffect(()=>{
        getEquipments()
    },[])

    useEffect(()=>{
        console.log(equipments)
    },[equipments])
    function getEquipments(){
        const equipmentcollectionRef = collection(db, 'equipments')
        getDocs(equipmentcollectionRef)
        .then(response=>{
            console.log(response.docs)
            const equip = response.docs.map(doc=> ({
                data: doc.data(),
                id: doc.id,
            }))
            setequipments(equip)
        }).catch(err=> console.log(err.message))
    }
  return (
    <div className='Product_container'>
        <h1>Our Products</h1>
        {
            equipments.map((data)=>(
                <section className='Product_Card'key={data.id}>
            <img src={data.data.imageUrl} alt='a pix'/>
            <h3> {data.data.name} </h3>
            <p> #{data.data.price} </p>
            <Link href='https://api.whatsapp.com/send/?phone=%2B2349079709011&text&type=phone_number&app_absent=0'>
            <button className='Order_btn'>Buy Now</button>
            </Link>
        </section>
            ))
        }

        <Footer/>
        
    </div>
  )
}

export default Products
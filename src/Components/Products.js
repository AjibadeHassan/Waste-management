import React, { useEffect, useState } from 'react'
import {collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/Base'

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
            <img src='' alt='a pix'/>
            <h3>{data.data.name}</h3>
            <p>Price</p>
            <button className='Order_btn'>Buy Now</button>
        </section>
            ))
        }
        
    </div>
  )
}

export default Products
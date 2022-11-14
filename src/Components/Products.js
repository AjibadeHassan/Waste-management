import React, { useEffect, useState } from 'react'
import {collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/Base'

const Products = () => {
    const [equipments, setequipments] = useState([])
    useEffect(()=>{
        getEquuipments()
    },[])

    useEffect(()=>{
        console.log(equipments)
    },[equipments])
    function getEquuipments(){
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
    <div>
products
    </div>
  )
}

export default Products
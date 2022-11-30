import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db, storage } from '../lib/Base';
import Footer from './Footer';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const AdminDash = () => {
   
    const equipcollectionRef = collection(db, 'equipments')
     const [equipments, setequipments] = useState([])
     const [info, setInfo] = useState(null)
     const [progress, setProgress] = useState()
     const [myUrl, setMyUrl] = useState()

     const Upload =(event)=>{
        if(event.target.files[0]){
        const File = event.target.files[0]
        setInfo(File);
        const Url = URL.createObjectURL(File)
        setMyUrl(Url)
        }
        
     }

const uploadStorage = (file)=>{
    if(file === null) return;
    const storageRef = ref(storage, `/files/${file.name}`)
    uploadBytes(storageRef, file).catch(err=> console.log(err))
    .then(()=>  getDownloadURL(storageRef)
    .then((url)=> setProgress(url)))
   
   
    
}

     useEffect(()=>{
        uploadStorage(info)
     }, [info])
      getEquipments()
   
    useEffect(()=>{
        // console.log(equipments)
    },[equipments])
    
 function getEquipments(){
        getDocs(equipcollectionRef, 'equipments')
        .then(response=>{
            // console.log(response)
            const equip = response.docs.map(doc=> ({
                data: doc.data(),
                id: doc.id,
            }))
            setequipments(equip)
        })
    }


    


    const handleSubmit = (e)=>{
        e.preventDefault()
        if (name === '' || price === '' || progress ==='') return;
      
        const myData = {
            name: name,
            price: price,
            imageUrl: progress
        }
        addDoc(equipcollectionRef, myData)
         .then(()=>{
            setName('');
            setPrice('');
            setMyUrl('')

         })
    } 
    const[name,setName] = useState('')
    const [price, setPrice] =useState('')

  return (
    <div className='Admin_container'>
        <h1>My products</h1>
        <div className='Admin_prod__container'>
            {
                equipments.map((props)=>(
                    <section className='Product_Card'key={props.id}>
                    <img src={props.data.imageUrl} alt='a pix' />
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
        <div className='upload_cont'>
            <img src={myUrl} alt='a pix' />
        </div>
        <label htmlFor='choose'>
               <input id='choose' type='file'  onChange={Upload} hidden/>
               <div  className='Order_btnn'>Upload Image</div>
           </label>
          
        <input  value={name} placeholder='Product Name' onChange={e=> setName(e.target.value)} type='text' />
        <input  value={price} placeholder='Price' onChange={e=> setPrice(e.target.value)} type='number' />
            <button className='Order_btnn' type='submit'>Submit</button>
        </form>
        <Footer/>
    </div>
  )
}

export default AdminDash
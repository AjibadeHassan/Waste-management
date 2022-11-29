import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db, storage } from '../lib/Base';
import Footer from './Footer';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const AdminDash = () => {
   
    const equipcollectionRef = collection(db, 'equipments')
     const [equipments, setequipments] = useState([])
     const [info, setInfo] = useState(null)
     const [progress, setProgress] = useState(0)
     const [myUrl, setMyUrl] = useState()

     const Upload =(event)=>{
        const File = event.target.files[0]
        const Any = URL.createObjectURL(File)
        setInfo(Any)
        uploadStorage(Any)
        console.log(equipments)
     }

const uploadStorage = (file)=>{
    if(!file) {
        console.log('no data available')
    };
    const storageRef = ref(storage, `/files/${file.name}`)
    const UploadTask = uploadBytesResumable(storageRef, file)

    UploadTask.on(
        "state_changed",
        (snapshot) =>{
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100)
            setProgress(prog)
            console.log(progress)
        },
        (err)=> {
            console.log(err)
        },
        ()=>{
            getDownloadURL(UploadTask.snapshot.ref)
            .then(url => {
                setMyUrl(url)
            })

        }
    )
}
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
        if (name === '' || price === '' || myUrl === '') {
            return
        }
        // alert(name)
        // alert(price)
        const myData = {
            name: name,
            price: price,
            imageUrl: myUrl
        }
        addDoc(equipcollectionRef, myData)
        // .then(response=>{
        //     console.log(response.id)
        // }).catch(err=> console.log(err.message))
        // window.location.reload()
    console.log (myUrl)
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
            <img src={info} alt='a pix' />
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
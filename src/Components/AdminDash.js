import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../lib/Base';
import Footer from './Footer';
import { HashLink as Link } from 'react-router-hash-link';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const AdminDash = () => {
   
    const equipcollectionRef = collection(db, 'equipments')
     const [equipments, setequipments] = useState([])
     const [info, setInfo] = useState(null)
     const [progress, setProgress] = useState()
     const [myUrl, setMyUrl] = useState()
     const [update, setUpdate] = useState(false)
     const [prodid, setProdid] = useState()

     function updatePrice(id){
        if (name === '' || price === '' || progress ==='') return;
        const myData = {
            name: name,
            price: price,
            imageUrl: progress
        }
        const Document = doc(db, 'equipments', id)
        updateDoc(Document, myData)
         .then(()=>{
            setName('');
            setPrice('');
            setMyUrl('');
            setUpdate(false)

         })
       
     }


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
   
    // useEffect(()=>{
    //     // console.log(equipments)
    // },[equipments])
    
 function getEquipments(){
    // if(equipments) return;
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

    const DeleteProduct = (id)=>{
        // e.preventDefault()
        const deldoc = doc(db, 'equipments', id)
        deleteDoc(deldoc)
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
                    <div className='Product_Card'key={props.id}>
                    <img src={props.data.imageUrl} alt='a pix' />
                    <h3> {props.data.name} </h3>
                    <p> #{props.data.price} </p>
                    <Link to="#Update">
                    <button onClick={()=>{
                        setUpdate(true)
                        setProdid(props.id)
                        }} className='Order_btn'>Update Product</button>
                        </Link>
                    <button onClick={()=> DeleteProduct(props.id)} className='Delete_btn'>Delete</button>
                </div>
                ))
            }
        </div> 
        
            {
                update?(
                    <section id="Update">
                    <h1>Update Product</h1>
       
                    <form className='Upload_form'>
                    <div className='upload_cont'>
                        <img src={myUrl} alt='a pix' />
                    </div>
                    <label htmlFor='choose'>
                           <input id='choose' type='file'  onChange={Upload} hidden/>
                           <div  className='Order_btnn'>Upload Image</div>
                       </label>
                      
                    <input  value={name} placeholder='Product Name' onChange={e=> setName(e.target.value)} type='text' />
                    <input  value={price} placeholder='Price' onChange={e=> setPrice(e.target.value)} type='number' />
                        <span className='Order_btnn' role='button'  onClick={()=> updatePrice(prodid)}>Update Product</span>
                    </form>
                    </section>
                ) : (
                    <section>
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
                    </section>
                )
            }
        
        <Footer/>
    </div>
  )
}

export default AdminDash
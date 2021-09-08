import React, {useRef, useEffect, useState} from 'react'
import '../scss/AdminPage/Admin.scss'
import { db } from '../firebase-config';
import Modal from './Modal';
export default function AdminPage(){
   
    const [goods, setGoods] = useState([]);
    const [open, setOpen] = useState(false); 

      const [editable, setEditable]= useState(false)
    const [toUpdateId, setToUpdateId] = useState('');
    const descriptionRef = useRef() 
    
   
    const updateDescriptionRef = useRef() 
    const updateQuantityRef = useRef() 
    const updateCategoryRef = useRef() 
    const updatePriceRef = useRef() 
    const updateImgRef = useRef()

    useEffect(() => { 
        
     
        db.collection('Goods').onSnapshot(snapshot => { 
          
            setGoods(snapshot.docs.map(doc => { 
            return { 
                description: doc.data().description, 
                img: doc.data().img, 
                category: doc.data().category, 
                quantity: doc.data().quantity, 
                price: doc.data().price,
                id:doc.id
            } 
          })) 
        }) 
     
      }, []);


      const submit = (e) => { 
        e.preventDefault(); 
      
    }


      const deleteTodo = (id) => { 
        db.collection('Goods').doc(id).delete().then(res => { 
          console.log('Deleted!', res); 
        }); 
      }

      const openUpdateDialog = (el) => { 
        setOpen(true); 
        setToUpdateId(el); 
      }

      const openAdd = () => { 
        setOpen(true); 
      
      }
      const handleClose = () => { 
        setOpen(false); 
      };
      
    //   const addProduct= ()=>{
    //     db.collection('Goods').add({ 
    //         description: descriptionRef.current.value, 
    //         category: categoryRef.current.value, 
    //         quantity: quantityRef.current.value, 
    //         price: priceRef.current.value, 
    //         img: imgRef.current.value 
    //     })
        
    //   }

    //   const editTodo = () => { 
    //     db.collection('Goods').doc(toUpdateId).update({ 
    //         description: updateDescriptionRef.current.value, 
    //         category: updateCategoryRef.current.value, 
    //         quantity: updateQuantityRef.current.value, 
    //         price: updatePriceRef.current.value, 
    //         img: updateImgRef.current.value 
    //     }); 
    //     setOpen(false); 
    //   }



    return (
        <div className="admin-content">

{/* <form className="bookForm" onSubmit={submit}> 
 
 <div className="formCont"> 

     <div className="inputCont"> 
         <label for="category">Enter category</label> 
         <input className="bookInputs" type="text" id="category" ref={categoryRef}/> 
     </div> 
     <div className="inputCont"> 
         <label for="description">Enter description</label> 
         <input className="bookInputs" type="text" id="description" ref={descriptionRef}/> 
     </div> 

 </div> 

 <div className="formCont"> 

     <div className="inputCont"> 
         <label for="quantity">Enter quantity</label> 
         <input className="bookInputs" type="text" id="quantity" ref={quantityRef}/> 
     </div> 
     <div className="inputCont"> 
         <label for="price">price</label> 
         <input className="bookInputs" type="text" id="price" ref={priceRef}/> 
     </div> 

   
 </div> 
 <div className="inputCont"> 
         <label for="image">image</label> 
         <input className="bookInputs" type="text" id="image" ref={imgRef}/> 
     </div> 

 
  
</form> */}
         
          <table border='1'> 
                <tr> 
                    <th> 
                        Category
                    </th> 
                    <th> 
                        Description
                    </th> 
                    
                    <th> 
                        Price 
                    </th> 
                    <th> 
                        Edit 
                    </th> 
                    <th> 
                        Delete 
                    </th> 
                </tr> 
                { 
                goods.map(arr => ( 
                 
            <tr> 
                <td> 
                    {arr.category} 
                </td> 
                <td> 
                    {arr.description} 
                </td> 
               
                <td> 
                    {arr.price}$ 
                </td> 
                <td onClick={() =>{ openUpdateDialog(arr.id)
                setEditable(true)
                }
                  }> 
                    Edit 
                </td> 
                <td onClick={() => deleteTodo(arr.id)}> 
                    Delete 
                </td> 
               
            </tr> 
 
                ))} 
 
 
            </table>

             <div className="button-add">
             <button type="submit"   onClick={() => {openAdd()
                setEditable(false)}  } >Add Product</button> 
             </div>
           

            <Modal open={open}
             setOpen={setOpen}
             toUpdateId={toUpdateId}
             editable={editable}
            />

            {/* <Dialog open={open} onClose={handleClose}> 
          <form className="editForm"> 
 
          <div className="formContEdit"> 
 
          <div className="inputCont"> 
                        <label for="category">Update category</label> 
                        <input className="bookInputs" type="text" id="category" ref={updateCategoryRef}/> 
                    </div> 
                    <div className="inputCont"> 
                        <label for="description">Update description</label> 
                        <input className="bookInputs" type="text" id="description" ref={updateDescriptionRef}/> 
                    </div> 
 
 
            <div className="inputCont"> 
                <label for="quantity">Update quantity</label> 
                <input className="bookInputs" type="text" id="quantity" ref={updateQuantityRef}/> 
            </div> 
            <div className="inputCont"> 
                <label for="price">Update price</label> 
                <input className="bookInputs" type="text" id="price" ref={updatePriceRef}/> 
            </div> 
 
 
            <div className="inputCont"> 
                        <label for="price">Update image</label> 
                        <input className="bookInputs" type="text" id="price" ref={updateImgRef}/> 
                    </div> 
 
 
            </div> 
 
            <Button onClick={handleClose} color="primary"> 
            Cancel 
          </Button> 
 
          <Button onClick={editTodo} color="primary"> 
            Save 
          </Button> 
       
            </form> 
           
         
      </Dialog> */}
           
        </div>
    )
}
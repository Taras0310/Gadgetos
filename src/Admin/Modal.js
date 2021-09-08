import { AnimatePresence, motion } from 'framer-motion'
import React  from 'react'
import '../scss/Modal.scss'
import { useRef } from 'react'
import { db } from '../firebase-config'

export default function Modal({open, setOpen, toUpdateId, editable}){

    const updateDescriptionRef = useRef() 
    const updateCategoryRef = useRef() 
    const updatePriceRef = useRef() 
    const updateImgRef = useRef()
    
    const descriptionRef = useRef() 
    const categoryRef = useRef() 
    const priceRef = useRef() 
    const imgRef = useRef()
   
    const editTodo = () => { 
        db.collection('Goods').doc(toUpdateId).update({ 
            description: updateDescriptionRef.current.value, 
            category: updateCategoryRef.current.value, 
            price: updatePriceRef.current.value, 
            img: updateImgRef.current.value 
        }); 
        setOpen(false); 
      }

      const addProduct= ()=>{
        db.collection('Goods').add({ 
            description: descriptionRef.current.value, 
            category: categoryRef.current.value, 
            price: priceRef.current.value, 
            img: imgRef.current.value 
        })
        
      }
       
      console.log(toUpdateId);
    return (
        <>
        <AnimatePresence>
         
         {
            open && (
                <motion.div  className="modal-background"
                onClick={(e)=> {
                    e.target.className === 'modal-background' && setOpen(false)
                    }}
                 initial={{opacity: 1}} in={{opacity: 0}} exit={{opacity: 1}}>

                <form className="product-cont" onSubmit={(e)=>{
                    e.preventDefault()
                }
                }> 
                   {
                       !editable?
                       <>
                         <div className="form-cont"> 
                 
                 <div className="inputCont"> 
                 <label for="category">Enter category</label> 
                 <input className="field" type="text" id="category" ref={categoryRef} /> 
                 </div> 
                 <div className="inputCont"> 
                 <label for="description">Enter description</label> 
                 <input className="field" type="text" id="description" ref={descriptionRef} /> 
                 </div> 
     
                 </div> 
     
                 <div className="form-cont"> 
     
                
                 <div className="inputCont"> 
                 <label for="price"> Enter price</label> 
                 <input className="field" type="text" id="price" ref={priceRef}/> 
                 </div> 
     
     
                 </div> 
                 <div className="inputCont"> 
                 <label for="image"> Enter image</label> 
                 <input className="field" type="text" id="image" ref={imgRef}/> 
                 </div> 
                
                    <button type="submit" id="submitBtn"  onClick={addProduct}>Add</button> 

                       </>: 
                       <>
                             <div className="form-cont"> 
                 
                 <div className="inputCont"> 
                 <label for="category">Enter category</label> 
                 <input className="field" type="text" id="category" ref={updateCategoryRef} /> 
                 </div> 
                 <div className="inputCont"> 
                 <label for="description">Enter description</label> 
                 <input className="field" type="text" id="description" ref={updateDescriptionRef} /> 
                 </div> 
     
                 </div> 
     
                 <div className="form-cont"> 
     
                
                 <div className="inputCont"> 
                 <label for="price">price</label> 
                 <input className="field" type="text" id="price" ref={updatePriceRef}/> 
                 </div> 
     
     
                 </div> 
                 <div className="inputCont"> 
                 <label for="image">image</label> 
                 <input className="field" type="text" id="image" ref={updateImgRef}/> 
                 </div> 
                
                    <button type="submit" id="submitBtn"  onClick={editTodo}>Edit</button> 
                      
                       </>
                   }
                
               
                
    
                </form>
            </motion.div>
            )
         }
        
      

        </AnimatePresence>
        </>
    )
}
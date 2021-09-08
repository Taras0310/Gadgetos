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
      
   

    return (
        <div className="admin-content">


         
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

        </div>
    )
}
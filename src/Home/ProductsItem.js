import React  from 'react'
import '../scss/Home/Products.scss'
import { useAuth } from '../Context/AuthContext';
import { useHistory } from 'react-router';

export default function ProductsItem({arr}){

    const {currentUser}=useAuth()
    const history=useHistory()

    function addToBasket(e){
        if(currentUser ===undefined || currentUser===null){
           history.push('/login')
        }else{
            console.log('qq');
        }
    }
    
    return (
     
            
            <figure className="card">
                <img src={arr.img} />
                <div className="icons"><button onClick={addToBasket}>Купити</button></div>
                <figcaption>
                  <h3>{arr.category}</h3>
                  <div className="price">{arr.description}</div>
                  <div className="price"><strong>{arr.price } $</strong></div>
                  
                </figcaption>
              </figure>
        
    )
}
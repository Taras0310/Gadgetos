import React  from 'react'
import '../scss/Home/Products.scss'
import { useEffect } from 'react'; 
import {db} from '../firebase-config' 
import { useState } from 'react';
import ProductsItem from './ProductsItem';
import AdminPage from '../Admin/AdminPage';


export default function Products(){

  const [goods, setProducts] = useState([]);
  console.log(goods);

  useEffect(() => { 
         
       
          db.collection('Goods').onSnapshot(snapshot => { 
            
            setProducts(snapshot.docs.map(doc => { 
              return { 
                description: doc.data().description, 
                img: doc.data().img, 
                category: doc.data().category, 
                quantity: doc.data().quantity, 
                price: doc.data().price 
   
              } 
            })) 
          }) 
       
        }, []);

    return (
        <div className="product">
            <div className="search">
                <div className="search-str">
                    <input type="text" placeholder="Пошук по товарам"></input>
                </div>
                <div class="button"><button>Пошук</button></div>
            </div>
            <div className="product-list">
            {goods.map(el =><ProductsItem key= {`list-item-${el.id}` } arr={el} />)}
           
          


             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
              {/* <figure className="card "><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample77.jpg" alt="sample77" />
                <div className="icons"><button>Купити</button></div>
                <figcaption>
                  <h3>Ursula Gurnmeister</h3>
                  <div className="price">$89.00</div>
                </figcaption>
              </figure>


              <figure className="card"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" alt="sample71" />
                <div className="icons"><button>Купити</button></div>
                <figcaption>
                  <h3>Ingredia Nutrisha</h3>
                  <div className="price">$19.00</div>
                </figcaption>
              </figure>

              <figure className="card"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" alt="sample71" />
                <div className="icons"><button>Купити</button></div>
                <figcaption>
                  <h3>Ingredia Nutrisha</h3>
                  <div className="price">$19.00</div>
                </figcaption>
             
              </figure>
              <figure className="card"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" alt="sample71" />
                <div className="icons"><button>Купити</button></div>
                <figcaption>
                  <h3>Ingredia Nutrisha</h3>
                  <div className="price">$19.00</div>
                </figcaption>
              </figure>

              
              <figure className="card"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" alt="sample71" />
                <div className="icons"><button>Купити</button></div>
                <figcaption>
                  <h3>Ingredia Nutrisha</h3>
                  <div className="price">$19.00</div>
                </figcaption>
              </figure>

              <figure className="card"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" alt="sample71" />
                <div className="icons"><button>Купити</button></div>
                <figcaption>
                  <h3>Ingredia Nutrisha</h3>
                  <div className="price">$19.00</div>
                </figcaption>
              </figure>

              <figure className="card"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" alt="sample71" />
                <div className="icons"><button>Купити</button></div>
                <figcaption>
                  <h3>Ingredia Nutrisha</h3>
                  <div className="price">$19.00</div>
                </figcaption>
              </figure>

              <figure className="card"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg" alt="sample71" />
                <div className="icons"><button>Купити</button></div>
                <figcaption>
                  <h3>Ingredia Nutrisha</h3>
                  <div className="price">$19.00</div>
                </figcaption>
              </figure> */}
            </div>
        </div>
    )
}
import React  from 'react'
import '../scss/Home/Sidebar.scss'

export default function Sidebar(){
    return (
        <div className="side">
           <div className="caption"><h3>Категорії товарів</h3></div>
           
               <ul>
                   
                   <li>Всі товари</li>
                   <li >Lenovo</li>
                   <li >Samsung</li>
                   <li>Apple</li>
                   <li>Huawei</li>
                   <li>Lg</li>
                  
               </ul>
           
        </div>
    )
}
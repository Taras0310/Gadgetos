
import '../scss/Header.scss'

import { Link, useHistory} from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useState, useRef } from 'react';
import Login from './Login/Login';
import{ emailRef, passwordRef} from './Login/Login'


 
export default function Header(){

    const emailRef=useRef()
    const passwordRef=useRef()
    const [eror, setEror]=useState('')
    const {currentUser, logout, admin}=useAuth()
    const history=useHistory()
    
 
  
  
  async function handleLogout(){
        setEror('');
       
        try{
            history.push('/')
            
             await logout()
            
            
             
            
             
        }catch{
            setEror('Failed to kog out!')
            
           
        }
    
    }
  
    
    return (
        
        <div className="top">
            <div className="leftpart">
                <div className="caption">Gadgetos</div>
                <div className="text">Широкий вибір, доступна ціна! </div>    
            </div>
            <div className="rightpart">              
                <div className="list-item">            
                    <ul>      
                    
                           
                        {
                            (currentUser ===undefined || currentUser===null)? 
                            <>
                                <Link to="/" className="navlinks"><li >На головну</li></Link> 
                                <Link to="/contact" className="navlinks"><li >Контакти</li></Link> 
                                <Link to="/signup" className="navlinks"> <li >Sign up</li></Link>
                                <Link to="/login" className="navlinks"><li >Login</li></Link> 
                            </>  :
                            <>
                                {
                                    admin?  <Link to="/admin" className="navlinks"><li >На головну</li></Link> :
                                    <Link to="/" className="navlinks"><li >На головну</li></Link> 
                                }
                                <Link to="/contact" className="navlinks"><li >Контакти</li></Link> 
                                <Link to="/profile" className="navlinks"> <li>Кабінет</li></Link>
                                <li onClick={handleLogout} >Вихід</li>
                            </>
                          
                            
                        }
                            
                    </ul> 
                    
                </div>
            </div>
        </div>
         
        
        
    );
    
}
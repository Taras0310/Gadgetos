import React, { useRef , useState} from 'react'
import '../../scss/Login/Login.scss'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
export default function Login(){

    const emailRef=useRef()
    const passwordRef=useRef()
    const {login, admin}=useAuth()
    const [eror, setEror]=useState('')
    const [loading, setLoading]=useState(false)
     const history=useHistory()
 
     async function handleSubmit(e){
     e.preventDefault();
     
   

   try{
       setEror('')
       setLoading(true)
       await login(emailRef.current.value, passwordRef.current.value).then(resp=>{
          
        if(admin){
            
          history.push('/admin')
         
        
        }else{
          history.push('/')
          
        }
       })
     
      
     

   }catch(eror){
    setEror(eror.message)
       
   }
   setLoading(false)
  
    }

    return (
        <div className="log">
            
            <form autoComplete="off" className='form-group' onSubmit={handleSubmit}>
            <h2>Login</h2>
                
            {eror && <div className="error-alert">{eror}</div>}

                <div className='field'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" className='form-control' ref={emailRef} required
                     />
                    </div>
               
                <div className='field'>
                <label htmlFor="passowrd"><strong>Password</strong></label>
                <input type="password" className='form-control' ref={passwordRef} required
                     />
                    </div>
               
                <button type="submit" className="btn">Login</button>
                <span>Don't have an account? Signup
                <Link to="/signup"> Here</Link>
            </span>
            </form>
           
            
           
        </div>
    )
}
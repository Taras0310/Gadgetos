import React, { useRef , useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../scss/Login/Signup.scss'
import { useAuth } from '../../Context/AuthContext'



export default function Signup(){
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const {signup}=useAuth()
    const [eror, setEror]=useState('')
    const [loading, setLoading]=useState(false)
    const history=useHistory()

     async function handleSubmit(e){
     e.preventDefault();

   if(passwordRef.current.value!==passwordConfirmRef.current.value){
       
       return setEror('Паролі не співпадають!')
   }

   try{
       setEror('')
       setLoading(true)
       await signup(emailRef.current.value, passwordRef.current.value)
       history.push('/')

   }catch(eror){
       setEror(eror.message)
   }
   setLoading(false)
    }
   
    return (
        <div className='sign'>
            
            
            
            <form autoComplete="off" className='form-group' onSubmit={handleSubmit} >
            <h2>Sign up</h2>

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

                    <div className='field'>
                <label htmlFor="confirm passowrd"><strong>Confirm password</strong></label>
                <input type="password" className='form-control' ref={passwordConfirmRef} required
                    />
                    </div>
               
                <button type="submit" className="btn">SUBMIT</button>
                <span>Already have an account? Login
                <Link to="login"> Here</Link>
            </span>
            </form>
           
            
           
        </div>
    )
}
import React  from 'react'
import '../scss/Profile/Profile.scss'
import { useAuth } from '../Context/AuthContext'
import { useState } from 'react'


export default function Profile(){

    const [eror, setEror]=useState('')
    const {currentUser}=useAuth()
    console.log(currentUser);

    return (
        <div className="profile">
        {(currentUser !==undefined || currentUser!==null)? 
           <>
                {eror && <div className="error-alert">{eror}</div>}
                <div className="content-profile">
                    <h1>Profile</h1>
                    <div className="user-info">
                        <strong>Email: </strong> {currentUser.email}
                    </div>
                </div>
          </>
        : <div></div>}

        </div>
       
        
    )
}
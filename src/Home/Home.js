import React from 'react';
import '../scss/Home/Home.scss'
import Products from './Products';
import { useAuth } from '../Context/AuthContext';
import Sidebar  from  './Sidebar.js';

export default function Home(){
    const {currentUser}=useAuth();
    console.log(currentUser);
    return (
        <div className="page">
             <Sidebar />
            <Products />
        </div>
    )
}
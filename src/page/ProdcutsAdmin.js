import './Products.css'
import Sidebar from '../components/Sidebar';
import Header from '../components/HeaderAdmin';
import Content from '../components/content'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
// import logo from './images/Logo.png'
function Prodcuts(){     
    
    return(
        <div className="content">
            
                <Sidebar/>
                <div className='center'>
                <Header/>
                <Content/>

                </div>
            
        </div>
    )
}
export default Prodcuts;
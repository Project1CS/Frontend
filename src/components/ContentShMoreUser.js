import './ContentShmore.css'
import robe from '../images/robe.jpg'
import {Link, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';

function ContentShmore(){
const id=useParams();
    const [orders, setOrders] = useState([]);
    const[user,setUser]=useState('')

    useEffect(() => {
      axios
        .get(`http://localhost:4000/products/Commandeuser/${id}`, { withCredentials: true })
        .then((response) => {
          setOrders(response.data.commandes);
          setUser(response.data.user)
          console.log(response.data.user)
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);

    return(
        <div className='contentSh'>
        <div className="top">
                    <p>Dashbord / Users / <span>Show more </span></p>
                   
                </div>
            <div className='divTitre'>
                    <p className='Titre'>User Information</p>
            </div>
            <div className='InfoUser'>
                <table className='ShInfoUser'>
                    <thead>
                     <tr>
                      <th>Id </th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Status</th>
                     </tr>
                    </thead>
                    <tbody>
                        
                      <tr>
                       <td>1111</td>
                       <td>IKRAM SAFIA</td>
                       <td>is.aouay@esi-sba.dz</td>
                       <td>Address</td>
                       <td>Active</td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className='divTitre'>
                    <p className='Titre'>Order items</p>
                 </div>
            <div className='InfoOrders'>
                 
                <table className='tableOrdersUser'>
                 <thead>
                 <tr>
                 <th>Id</th>
                     
                       <th>Full Name</th>
                       <th>Price</th>
                       <th>Date</th>
                       <th>Payment</th>
                       <th>status</th>
                       <th>Action</th>
                     </tr> 
                 </thead>
                 <tbody>
                   <tr>
                    <td>2222</td>
                    
                    <td>Robe</td>
                    <td>3</td>
                    <td>Address</td>
                    <td>1000DZ</td>
                    <td>3000DZ</td>
                    <td>
                <Link to={'/OrderDetail'} >
                 <button className='showmore'>Show more</button>
                 </Link>
                </td>
                   </tr>
                   <tr>
                    <td>2222</td>
                    <td><img src={robe}></img></td>
                    <td>Robe</td>
                    <td>3</td>
                    <td>Address</td>
                    <td>1000DZ</td>
                    
                    <td>
                <Link to={'/OrderDetail'} >
                 <button className='showmore'>Show more</button>
                 </Link>
                </td>
                   </tr>
                   <tr>
                    <td>2222</td>
                    <td><img src={robe}></img></td>
                    <td>Robe</td>
                    <td>3</td>
                    <td>Address</td>
                    <td>1000DZ</td>
                    
                    <td>
                <Link to={'/OrderDetail'} >
                 <button className='showmore'>Show more</button>
                 </Link>
                </td>
                   </tr>
                   <tr>
                    <td>2222</td>
                    <td><img src={robe}></img></td>
                    <td>Robe</td>
                    <td>3</td>
                    <td>Address</td>
                    <td>1000DZ</td>
                    
                    <td>
                <Link to={'/OrderDetail'} >
                 <button className='showmore'>Show more</button>
                 </Link>
                </td>
                   </tr>
                 </tbody>
                </table>
             
            </div>
        </div>
    )

}
export default ContentShmore
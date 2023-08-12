import './Products.css'
import Sidebar from '../components/Sidebar';
import Header from '../components/HeaderAdmin';
import Content from '../components/content'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
// import logo from './images/Logo.png'
function Prodcuts(){

    const [products, setProducts] = useState([]);
    const [username,setUsername]=useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/products/getAllProduct', { withCredentials: true })
          .then((response) => {
            setProducts(response.data.products);
            console.log(response.data);
            
            if (response.data.token) {
              setUsername(response.data.token.username);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }, []);
      
    
    return(
        <div className="content">
            
                <Sidebar/>
                <div className='center'>
                <Header username={username}/>
                <Content products={products}/>

                </div>
            
        </div>
    )
}
export default Prodcuts;
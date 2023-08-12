import HeaderAdmin from "../components/HeaderAdmin";
import Sidebar from "../components/Sidebar";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router';

import ShowMore from '../components/ProductDAdmin'
function ProductDetailAdmin(){
    const {matricule}=useParams();
  const [products, setProducts] = useState([]);
  const [username,setUsername]=useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/products/getOneProduct/${matricule}`, { withCredentials: true })
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
            <HeaderAdmin username={username} />
            <ShowMore products={products} mat={matricule}/>
            </div>


        </div>
    )
}
export default ProductDetailAdmin;

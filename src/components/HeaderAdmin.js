import User from '../images/user.jpg';
import './Header.css'
import {useState, useEffect} from 'react';
import axios from 'axios';

function Header(props){
    const [username,setUsername]=useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/products/getAllProduct', { withCredentials: true })
          .then((response) => {           
            if (response.data.token) {
              setUsername(response.data.token.username);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }, []);

    return(
        <div className="header">
            <div className="left">
                
            <h1>Products</h1>
            </div>
            <div className="right">
            <p>{username}</p>
            <div className="pofileImage">
            
            <img src={User}/>
            </div>
           
            </div>
        </div>
    )
}
export default Header;
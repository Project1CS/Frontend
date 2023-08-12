import { NavLink } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import Header from "../components/Header";
import WishlistItem from "../components/WishlistItem";
import '../css/Wishlist.css';
import axios from 'axios';

function Wishlist () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/products/getWishlist', { withCredentials: true })
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
    return (
        <>
      <Header/>
      <section>
        <div className="header2">
          <h6>Home / Wishlist </h6>
          <h4 id="state">Wishlist</h4>
        </div>

        <div className="small-container wishlist-page">
          <table>
            <thead>
              <tr>
                <th id="item">Item</th>
                <th id="price">Price</th>
                <th id="act">Action</th>
              </tr>
            </thead>
            <tbody>
              <WishlistItem products={products}/>
            </tbody>
          </table>
        </div>
      </section>
    </>

    )
      
    
  }
  export default Wishlist;
import React from 'react';
import '../css/cart.css';
import '../css/products.css';
import Header from '../components/Header';
import Order from '../components/Order'; 
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cart() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:4000/products/cart', { withCredentials: true })
        .then((response) => {
          setProducts(response.data.products);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
    const calculateSubtotal = () => {
      let subtotal = 0;
      products.forEach((product) => {
        subtotal += product.prix * product.quantite;
      });
      return subtotal;
    };

  return (
    <>
      <Header/>
      <section>
        <div className="header2">
          <h6>Home / Shopping Bag </h6>
          <h4 id="state">Shopping Bag</h4><h4> {'>'} Place Order {'>'} Pay {'>'} Order Complete</h4>
        </div>

        <div className="small-container cart-page">
          <table>
            <thead>
              <tr>
                <th id="item">Item</th>
                <th id="price">Price</th>
                <th id="qty">Quantity</th>
                <th id="total">Total</th>
              </tr>
            </thead>
            <tbody>
              <Order products={products}/>
            </tbody>
          </table>
        </div>

        <div className="order">
          <h4>Order Summary</h4>
          <h6>Sub Total</h6>
          <h5>{calculateSubtotal()} Da</h5>
<Link to={`/ShippingAddress/${calculateSubtotal()}`}>
  <button className="checkout-btn" onClick={(e) => {
    if (calculateSubtotal() === 0) {
      e.preventDefault(); // Prevent the default form submission
      window.alert("The cart is empty!");
      window.location.reload();
    }
  }}>Checkout Now</button>
</Link>
        </div>
      </section>
    </>
  );
}


export default Cart;

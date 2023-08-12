import React from 'react';
import css from '../css/UserOrders.css';
import Header from '../components/Header';
import { NavLink, Link, useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import axios from 'axios';

function UserOrders() {
  const id=useParams().id
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      axios
        .get('http://localhost:4000/products/getOrdersUser', { withCredentials: true })
        .then((response) => {
          setOrders(response.data.commandes);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
  return (
    <>
    <Header/>
    <div className='header2-orders'>
        <h5>Profile / My Orders </h5>
      </div>
    <div className="container-orders">
      <section className="main-orders">
        <section className="orders">
        <h1>My Orders</h1>
          <div className="orders-list">
            <table className="table-orders">
              <thead>
                <tr>
                  <th>Full name</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Payment</th>
                  <th>Livraison Address</th>
                  <th>Status</th>
                  {/* <th id='ord-details'>Details</th> */}
                </tr>
              </thead>
              <tbody>
              {orders.map((order) => (
              <tr key={order.id}>
                  <td>{order.fullname}</td>
                  <td>{order.date_achat}</td>
                  <td>{order.total} DA</td>
                  <td>{order.paymentOnline === 1 ? 'Credit Card' : 'Hand To Hand'}</td>
                  <td>{order.fullAddress}</td>
                  <td>{order.état}</td>
                  {/* <td>
                   <Link to="/UserOrderDetails">
                    <button id='view'>View</button>
                   </Link>
                 </td> */}
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
    </>
  );
}

export default UserOrders;
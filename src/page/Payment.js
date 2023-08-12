import React, { useState,useEffect } from 'react';
import Header from '../components/Header';
import css from '../css/payment.css';
import paypal from '../images/paypal.png';
import visa from '../images/visa.png';
import lock from '../images/lock.png'
import mastercard from '../images/mastercard.png';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

function Payment() {    
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const fullname = queryParams.fullname;
    const numTel = queryParams.numTel;
    const fullAddress = queryParams.fullAddress;
    const paymentOnline = queryParams.paymentOnline;
    const total=queryParams.total;
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const numCarte = event.target.elements.numCarte.value;
        const codeCarte = event.target.elements.codeCarte.value;
        const data = {
            fullname,
            numTel,
            fullAddress,
            paymentOnline,
            total,
            numCarte,
            codeCarte 
          };
        axios
          .post(`http://localhost:4000/products/acheterPanier/${total}`, data,{withCredentials:true})
          .then((response) => {
            window.alert("Order is Confirmed")
            window.location.href=`http://localhost:3000/UserOrders`;
            console.log(response.data);
          })
          .catch((error) => {
            window.alert(error.response.data.msg)
            console.error("amani"+error);
          });
      };
    

  return (
    <>
      <Header/>
      <div className='header2-pay'>
        <h6>Home / Shopping Bag </h6>
        <div id='info-pay'>
          <h4 id='bef-pay'>Shopping Bag {' >'}Place Order {'> '}</h4>
          <h4 id='state-pay'>Pay</h4>
          <h4 id='aft-pay'>{' >'} Order Complete</h4>
        </div>
      </div>
      <div id='secure'>
      <  h4>SECURE CHECKOUT</h4><img src={lock}></img>
      </div>
      <div className='container-shipp'>
        <form className='form1' onSubmit={handleSubmit}>
          <div className='col'>
            <h3 className='title'>Card Information</h3>
            <div id='pay-cards-icons'>
          <img width={'30px'} src={visa} alt='Visa' />
          <img width={'30px'} src={mastercard} alt='Paypal' />
          <img width={'30px'} src={paypal} alt='Mastercard' />
        </div>
            <div className='inputBox'>
              <input type='text' placeholder='Card No.*' name="numCarte"></input>
            </div>
            {/* <div className='inputBoxDate'>
             <select id="inputmonth" class="inputmonth" >
              <option selected value="" name="month">Month</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
             </select>
            
            <select id="inputyear" class="inputyear" >
               <option selected value="" name="year">Year</option>
               <option value="1">2023</option>
               <option value="2">2024</option>
               <option value="3">2025</option>
               <option value="4">2026</option>
            </select>
            </div> */}
            <div className='inputBox' id='code'>
              <input type='password' placeholder='Security Code*' name="codeCarte"></input>
            </div>
          </div>
          <input type='submit' value='Place Order' id='submit-btn'></input>
        </form>
      </div>
    </>
  );
};

export default Payment;
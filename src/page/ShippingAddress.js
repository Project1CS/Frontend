import React, { useState } from 'react';
import Header from '../components/Header';
import css from '../css/shippingAddress.css';
import paypal from '../images/paypal.png';
import visa from '../images/visa.png';
import mastercard from '../images/mastercard.png';
import { Link, NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

function CheckboxGroup() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='container-shipp2'>
      <h3 className='title2'>Payment Method</h3>
      <div className='hand'>
        <input
          type='radio'
          id='option1'
          name='paymentMethod'
          value='0'
          checked={selectedOption === '0'}
          onChange={handleOptionChange}
        />
        <label htmlFor='option1'>Hand by hand</label>
      </div>
      <div className='creditcard'>
        <input
          type='radio'
          id='option2'
          name='paymentMethod'
          value='1'
          checked={selectedOption === '1'}
          onChange={handleOptionChange}
        />
        <label htmlFor='option2'>Credit Card</label>
        <div className='cards-icons'>
          <img src={visa} alt='Visa' />
          <img src={mastercard} alt='Paypal' />
          <img src={paypal} alt='Mastercard' />
        </div>
      </div>
    </div>
  );
}

const ShippingAddress = () => {
    const total=useParams().total;
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const fullname = event.target.elements.fullName.value;
    const numTel = event.target.elements.number.value;
    const fullAddress = event.target.elements.address.value;
    const paymentOnline = event.target.elements.paymentMethod.value;
    const data = {
        fullname,
        numTel,
        fullAddress,
        paymentOnline,
      };

    if(event.target.elements.paymentMethod.value==='0'){
    axios
      .post(`http://localhost:4000/products/acheterPanier/${total}`, data,{withCredentials:true})
      .then((response) => {
        window.alert("Order is Confirmed")
        window.location.href='http://localhost:3000/UserOrders'
        console.log(response.data);
      })
      .catch((error) => {
        window.alert("Quantity is not available");
        console.error(error);
      });
    }else{
        window.location.href=`http://localhost:3000/Payment/?fullname=${data.fullname}&numTel=${data.numTel}&fullAddress=${data.fullAddress}&paymentOnline=${paymentOnline}&total=${total}`
        console.log(data)
    }
  };

  return (
    <>
      <Header />
      <div className='header2'>
        <h6>Home / Shopping Bag </h6>
        <div id='info'>
          <h4 id='bef'>Shopping Bag {'>'}</h4>
          <h4 id='state'>Place Order</h4>
          <h4 id='aft'>{'>'}Pay {'>'} Order Complete</h4>
        </div>
      </div>
      <div className='container-shipp1'>
        <form className='form1' onSubmit={handleSubmit} id='shipping-form'>
          <div className='col'>
            <h3 className='title1'>Shipping address</h3>
            <div className='inputBox'>
              <input type='text' placeholder='Full Name*' name='fullName' />
            </div>
            <div className='inputBox' id='tel'>
              <input type='tel' placeholder='Number*' name='number' />
            </div>
            <div className='inputBox'>
              <input type='text' placeholder='Full Address*' name='address' />
            </div>
          </div>
          <CheckboxGroup />
      <input type='submit' value='Place Order' id='submit-btn' form='shipping-form' />
        </form>
      </div>
          </>
  );
};

export default ShippingAddress;

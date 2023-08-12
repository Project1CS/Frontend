import React, { useState } from 'react';
import img from '../images/f1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


export default function Order(props) {
  const [quantityError, setQuantityError] = useState('');

  const handleChange = (event, productId) => {
    const newQuantity = event.target.value;

    // Input validation
    if (newQuantity < 0) {
      setQuantityError('Quantity cannot be negative');
      return;
    }
    if (newQuantity === '') {
      setQuantityError('Quantity cannot be empty');
      return;
    }

    axios
      .put(`http://localhost:4000/products/modifyCart/${productId}`,{ newQuantity: newQuantity },{withCredentials:true})
      .then(response => {
        console.log('New quantity:', newQuantity, 'modified successfully');
        setQuantityError(''); // Reset the quantity error if it was previously set
      })
      .catch(error => {
        console.error('Error modifying quantity:', error);
      });
  };

  const handleDelete = (event, productId) => {
    axios
      .delete(`http://localhost:4000/products/deleteFromCart/${productId}`,{withCredentials:true})
      .then(response => {
        window.location.reload()
      })
      .catch(error => {
        console.error('Error modifying quantity:', error);
      });
  };

  return (
    <div>
      {props.products.map((product) => (
        <tr key={product.id}>
          <td>
            <div className="cart-info">
              <img src={img} alt="" />
              <div>
                <p>{product.nom_produit}</p>
                <a  className='faTrash'>
                  <FontAwesomeIcon icon={faTrash} onClick={(event) => handleDelete(event, product.id_produit)}/>
                </a>
              </div>
            </div>
          </td>
          <td>{product.prix} DA</td>
          <td>
            <input
              type="number"
              name="newQuantity"
              defaultValue={product.quantite}
              onChange={(event) => handleChange(event, product.id_produit)}
            />
            {/* <button onClick={(event)=>window.location.reload()}>save</button> */}
            {quantityError && <span className="error-message">{quantityError}</span>}
          </td>
          <td id="total-dinars">{product.prix * product.quantite}DA</td>
        </tr>
      ))}
    </div>
  );
}

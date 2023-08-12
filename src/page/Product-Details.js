import React, { useState,useEffect } from 'react';
import '../css/products.css';
import '../css/product.css';
import Header from '../components/Header';
import img1 from '../images/f1.jpg';
import img2 from '../images/f2.jpg';
import img3 from '../images/f4.jpg';
import img4 from '../images/f5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

function ProductsPage() {
  const {id}=useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState();

    useEffect(() => {
        axios.get(`http://localhost:4000/products/getProductUser/${id}`, { withCredentials: true })
          .then((response) => {
            setProduct(response.data.product);
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }, []);


   const handleAddToCart = () => {
        const data = {
          product: product,
          quantity: quantity,
        };
        axios.post(`http://localhost:4000/products/getProductUser/${id}`, data, { withCredentials: true })
          .then((response) => {
            console.log(response.data);
            window.location.href="http://localhost:3000/Cart";
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };    

    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };

  const images = [img1, img2, img3, img4];

  const handleClick = (src) => {
    document.getElementById('MainImg').src = src;
  };

  return (
 <>
    <Header/>
    <div>
      {product.map((product) => (
      <section id="product-details" className="section-p1" key={product.id}>
        <div className="single-pro-image">
          <img src={`http://localhost:4000/uploads/${product.photo}`} width="100%" id="MainImg" alt="" />
          <div className="small-img-group">
            {/* {images.map((image, index) => (
              <div key={index} className="small-img-col">
                <img
                  src={image}
                  width="100%"
                  className="small-img"
                  alt=""
                  onClick={() => handleClick(image)}
                />
              </div>
            ))} */}
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / {product.categorie}</h6>
          <h4>{product.nom}</h4>
          <h2>{product.prix} DA</h2>
          <h4>{product.couleur}</h4>
          <h4>{product.taille}</h4>
          {/* <select>
            <option>Select Size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select> */}
          <input type="number" name='quantity' required onChange={handleQuantityChange}/>
          <Link to={'/Cart'}>
          <button className="add-cart" onClick={handleAddToCart}>Add To Cart</button>
          </Link>
          {/* <h4>Product Details</h4>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eum
            laudantium, mollitia odio ipsa iure sit quam fugiat distinctio!
            Quasi est reiciendis, similique cumque doloribus distinctio
            repellendus perspiciatis quos iste corporis. Eum laudantium,
            mollitia odio ipsa iure sit quam fugiat distinctio! Quasi est
            reiciendis, similique cumque doloribus distinctio repellendus
            perspiciatis quos iste corporis.
          </span> */}
        </div>
        </section>
      ))}
    </div>
  </>
);}

export default ProductsPage;
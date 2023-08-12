import React, { useState, useEffect } from 'react';
import '../css/products.css';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');

  useEffect(() => {
    const url = category
      ? `http://localhost:4000/products/getAllProductUser?category=${category}`
      : 'http://localhost:4000/products/getAllProductUser';

    axios.get(url, { withCredentials: true })
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [category]);

  const toggleHeart = (productId) => {
    const heartIcon = document.getElementById(`heart-icon-${productId}`);
    if (heartIcon.classList.contains('far')) {
      heartIcon.classList.remove('far');
      heartIcon.classList.add('fas');
      heartIcon.style.color = 'red';

      axios.post(`http://localhost:4000/products/AddWishlist/${productId}`, null, { withCredentials: true })
        .then((response) => {
          console.log('Product added to wishlist:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      <Header />
      <section id="product1" className="section-p1">
        <h2>Products</h2>
        <p>For each one of you</p>

        <div className="pro-container">
          {products.map((product) => (
            <div className="pro" key={product.id}>
              <img src={`http://localhost:4000/uploads/${product.photo}`} alt="" />
              <a>
                <Link to={'/Wishlist'}>
                  <FontAwesomeIcon
                    icon={farHeart}
                    onClick={() => toggleHeart(product.id)}
                    id={`heart-icon-${product.id}`}
                    className="far fa-heart"
                  />
                </Link>
              </a>
              <div className="des">
                <span>{product.marque}</span>
                <h5>{product.nom}</h5>
                <h5>{product.couleur}</h5>
                <h5>{product.taille}</h5>
                <h4>{product.prix} DA</h4>
              </div>
              <div className="shopping">
                <Link to={`/ProductDetails/${product.id}`}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;

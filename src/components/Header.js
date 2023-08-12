import logo from '../images/Logo.png';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRightFromBracket, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Header() {
  const handleLogout = () => {
    axios.get('http://localhost:4000/users/logout', { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = '/Signin';
        } else {
          console.error('Logout failed');
        }
      })
      .catch((error) => {
        console.error('Logout failed', error);
      });
  };

  return (
    <section id="header">
      <a href="#">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <div>
        <ul id="navbar">
          <div id="navbar-items">
            <li>
              <Link to={'/Products'}>
                <a className="active">Home</a>
              </Link>
            </li>
            <li>
              <Link to={'/Products'}>
                <a className="id">Products</a>
              </Link>
            </li>
            <li>
              <Link to={'/Products?category=Homme'}>
                <a className="id">Men</a>
              </Link>
            </li>
            <li>
              <Link to={'/Products?category=Femme'}>
                <a className="id">Women</a>
              </Link>
            </li>
            <li>
              <Link to={'/Products?category=Enfant'}>
                <a className="id">Kids</a>
              </Link>
            </li>
            <li>
              <Link to={'/Products?category=Unisex'}>
                <a className="id">Unisex</a>
              </Link>
            </li>
          </div>
          <li>
            <Link to={'/Cart'}>
              <a>
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </Link>
          </li>
          <li>
            <Link to={'/Wishlist'}>
              <a>
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </Link>
          </li>
          <li>
            <Link to={'/UserOrders'}>
              <a>
                <FontAwesomeIcon icon={faUserCircle} />
              </a>
            </Link>
          </li>
          <li>
            <NavLink onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

import img from '../images/f1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';


export default function WishlistItem(props){
  const handleDelete = (productId) => {
    axios.delete(`http://localhost:4000/products/deleteFromWishlist/${productId}`,{withCredentials:true})
      .then(response => {
        console.log('Product deleted successfully');
        window.location.reload();
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

    return (
      <div>
        {props.products.map((product)=>(
      <tr key={product.id}>
      <div className='wish'>
      <td>
        <div className="product-info">
          <img src={`http://localhost:4000/uploads/${product.photo}`} alt="" />
          <div>
            <p>{product.nom}</p>
            <a href="#" className='faTrash' onClick={() => handleDelete(product.id)}>
             <FontAwesomeIcon icon={faTrash} />
            </a>
          </div>
         
        </div>
      </td>
      <td className='price'>{product.prix} DA</td>
      <td>
      <div className="wishlist">
          <button id="checkout-btn">
          <Link to={`/ProductDetails/${product.id}`} >
            <a>Add to Cart</a>
          </Link>
          </button>
        </div>
      </td>
      </div>
    </tr>
    ))}
    </div>
    )
}
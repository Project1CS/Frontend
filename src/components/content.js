import './content.css';
import { FaEllipsisV, FaPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
import robe from "../images/robe.jpg";
import { NavLink, Link } from 'react-router-dom';

function Content() {
  const [products, setProducts] = useState([]);
  const [categorie, setCategorie] = useState('');
  const [prix, setPrix] = useState('');
  const[constProduct,setConstProduct]=useState('');


 const PrixChange=(e)=>{
    setPrix(e.target.value)
  }


  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [category, setCategory] = useState('');
  // const [price, setPrice] = useState('');
  useEffect(() => {
    axios.get('http://localhost:4000/products/getAllProduct', { withCredentials: true })
      .then((res) => {
        setFilteredProducts(res.data.products);      
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(categorie)
    console.log(prix)
    
    let ProductsFiltre = constProduct;
  
    if (categorie !== '') {
      ProductsFiltre = ProductsFiltre.filter((product) => product.categorie === categorie);
    }
  
    if (prix !== '') {
      ProductsFiltre = ProductsFiltre.filter((product) => product.prix <= prix);
    }
  
    setProducts(ProductsFiltre);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //     const response = await axios.get(
  //       `http://localhost:4000/products/RecherchParTout/?category=${category}&prix=${price}`,
  //       { withCredentials: true }
  //     ).then((response)=>{
  //       console.log(category)
  //     setFilteredProducts(response.data.products);
  //     // window.location.href=`http://localhost:3000/amani?category=${category}&price=${price}`
  //     console.log(response.data.products);}).catch( (error)=>{
  //     console.error('Error filtering products:', error);
  //   })
  // };

  function modifier(text) {
    var select = document.getElementById('list1');
    var selectText = document.getElementById('selectText2');
    selectText.innerHTML = text;
    select.style.display = "none";
    setCategorie(text)
  }

  function toggleSelect1() {
    axios.get("http://localhost:4000/products/list")
      .then((data) => console.log(data));

    var select = document.getElementById('list1');
    if (select.style.display === "none") {
      select.style.display = "block";
    } else {
      select.style.display = "none";
    }
  }

  return (
    <div className="contentt">
      <div className='top'>
        <p>Dashbord /<span> Products </span></p>

        <button>
          <i><FaPlus /></i>
          <NavLink to="/AjouterProduct">
            Add Product
          </NavLink>
        </button>

      </div>
      <div className='filter'>
        <h3>Filter Products</h3>
        <form onSubmit={handleSubmit}> 
          <div>
            <div className='select-btn' onClick={toggleSelect1}>
              <label id="selectText2">Categories</label>
              <input type="text"  id='Categories' name='category' />
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className='fromList' id='list1'>
              <input type="checkbox" id="All" name="All" />
              <label htmlFor="All" onClick={() => modifier("Unisex")}>All</label>
              <input type="checkbox" id="men" name="Men" />
              <label htmlFor="men" onClick={() => modifier("Homme")}>Men</label>
              <input type="checkbox" id="women" name="Women" />
              <label htmlFor="women" onClick={() => modifier("Femme")}>Women</label>
              <input type="checkbox" id="kids" name="Kids" />
              <label htmlFor="kids" onClick={() => modifier("Enfant")}>Kids</label>
            </div>
          </div>
          <div>
            <input type="number" placeholder='Price'  onChange={PrixChange}/>
          </div>
          <button onClick={handleSubmit}>Filtrer</button>
        </form>
      </div>
      <div className='tabelProducts'>
        <table className='ProductTabel'>
          <thead>
            <tr>
              <th>Id</th>
              <th>photo</th>
              <th>Name</th>
              <th>Categorie</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.matricule}</td>
                <td><img className='imageP' src={`http://localhost:4000/uploads/${product.photo}`} alt={product.name} /></td>
                <td>{product.nom}</td>
                <td>{product.categorie}</td>
                <td>{product.prix}</td>
                <td>
                  <Link to={`/Product-Detail/${product.matricule}`}>
                    <button className='showmore'>Show more</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Content

import './ProductDAdmin.css'
import robe from '../images/robe.jpg'
import {TbPencil} from 'react-icons/tb'
import{MdDelete} from 'react-icons/md'
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EditGProduct from '../page/EditGProduct'

function ShowMore(props){
  const [mat,setMat]=useState('')
  const [showConfirmation, setShowConfirmation] = useState(false);
console.log(props.mat)
  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmClick = () => {
    
    setShowConfirmation(false);
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
  };

    return(
        <div>
        <div className='contentProduct'>
        {showConfirmation && (
        <div className="confirmation-card">
          <h3>Are you sure you want to delete?</h3>
          <div className="confirmation-card-buttons">
            <button onClick={handleConfirmClick} className='Delete'>Delete</button>
            <button onClick={handleCancelClick} className='cancel'>Cancel</button>
          </div>
        </div>
      )}
         
            <div className='infoCommun'>
             <table className='TableInfoCommun'>
              <thead>
               <tr>
                  <th>Matricule</th>
                  <th>Name</th>
                  <th>Categorie</th>
                  <th>Marque</th>
                  <th>Price</th>
               </tr>
              </thead>
                <tbody>
                {props.products && props.products.length > 0 ? (
                 <tr>
                   <td>{props.products[0].matricule}</td> 
                   <td>{props.products[0].nom}</td>
                   <td>{props.products[0].categorie}</td>
                   <td>{props.products[0].marque}</td>
                   <td>{props.products[0].prix} DZ</td>                  
                 </tr>
                ):(<p>No products available</p>)}
                </tbody>
             </table>
             <Link to={`/EditGeneralProduct/${props.mat}`}><button>Edit</button></Link>
            </div>
            <div className='InfoQuantite'>
              <p>Colors and Sizes available</p>
              <div className='cards'>
              {props.products.map((product) => (   
              <div className='card'>
                    <div className='image'>
                    <div className='icon'>
                      <button className='iconButton'>
                      <i>
                        <Link to={`/EditProduct/${product.id}`}>
                        <TbPencil />
                        </Link>
                      </i>
                      </button>
                      <button className='iconButton' onClick={handleDeleteClick}>
                      <i>
                        <MdDelete />
                      </i>
                      </button>
                      </div>
                    <img src={robe}/>
                    </div>
                    <div className='infoProduct'>
                      <table className='TableInfoNotCommun'>
                       <thead>
                        <tr>
                         <th>ID</th>
                         <th>Color</th>
                         <th>Taill</th>
                         <th>Quantité</th>
                         
                        </tr>
                       </thead>
                       <tbody>
                        <tr key={product.id}>
                         <td>{product.id}</td>
                         <td>{product.couleur}</td>
                         <td>{product.taille}</td>
                         <td>{product.quantite}</td>                       
                         </tr>
                      </tbody>
                     </table>

                    </div>
                </div>
               ) )}               
              </div>

            </div>
        </div>
        </div>
    )
}
export default ShowMore;
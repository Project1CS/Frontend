import './EditP.css'
// import robe from '../images/robe.jpg'
import robe from '../images/robe.jpg'
import { useState } from 'react';
import ImageUpload from "./ImageUpload";
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

 function EditP(props){
  const [uploadImage, setUploadImage] = useState("");

  const handleFormSubmit = (event) => {
  event.preventDefault();
  const form = event.target;

  const updatedProduct = {
    quantite: form.quantite.value,
    taille: form.size.value,
    couleur: form.couleur.value,
  };
  axios
    .post(`http://localhost:4000/products/postUpdateProduct/${props.id}`, updatedProduct, { withCredentials: true })
    .then((response) => {
      window.location.href = `http://localhost:3000/Product-Detail/${props.matricule}`;
    })
    .catch((error) => {
      if (error.response) {
        // The request was made, but the server responded with an error status code
        console.error('Error:', error.response.status);
        console.error('Response:', error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
      }
    });
};

  const handleImageUpload = (event) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setUploadImage(reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);
  };
 
// function ImageUpload() {
//    const [selectedImage, setSelectedImage] = useState(null);
 
//    const handleImageUpload = (event) => {
//      const file = event.target.files[0];
//      setSelectedImage(URL.createObjectURL(file));
//    };
function Affichier() {
   var select = document.querySelector('.ul');
   if (select.style.display === "none") {
     select.style.display = "block";
   } else {
     select.style.display = "none";
   }
 }
 
   
    return(
        <div className='Edit'>
        <h2>Products / <span>Edit Products</span> </h2>
        <form onSubmit={handleFormSubmit}>
            <div className='info'>
                <h3>General information</h3>
                
                    {/* <div className='inputText'>
                    <label for="productname" class="formbold-form-label">
                       Product name
                    </label>
                    <input
              type="text"
              name="productname"
              id="productname"
              className="formbold-form"
              value={productName}
              onChange={handleInputChange}
            />
                    </div>
                    <div className='inputText'>
                    <label for="matricule" class="formbold-form-label">
                       Matricule
                    </label>
                    <input
              type="text"
              name="matricule"
              value={matricule}
              id="matricule"
              className="formbold-form"
              onChange={handleInputChange}
            />
                    </div> */}
   <div className='inputText'>
                       <label for="quantite" class="formbold-form-label"> Colour </label>
                       <input
                type="text"
                name="couleur"
                id="couleur"
                className="formbold-form"
                value={props.couleur}
                onChange={props.handleInputChange}
              />
                    </div>

                    <div className='inputText'>
                    <label for="quantite" class="formbold-form-label">
                    Quantité
                    </label>
                    <input
              type="number"
              name="quantite"
              id="quantite"
              className="formbold-form"
              value={props.quantite}
              onChange={props.handleInputChange}
            />
                    </div>
                    {/* <div className='categorie'>
                    <p>Categorie</p>
                    <div className="inputcheckbox">

                        
                        <label class="gender">Homme
                        <input
                  type="radio"
                  name="gender"
                  value="Homme"
                  checked={selectedGender === 'Homme'}
                  onChange={handleInputChange}
                />
                           <span class="checkmark"></span>
                        </label>
                        <label class="gender">Femme
                        <input
                  type="radio"
                  name="gender"
                  value="Femme"
                  checked={selectedGender === 'Femme'}
                  onChange={handleInputChange}
                />
                           <span class="checkmark"></span>
                        </label>
                        <label class="gender">Enfant
                        <input
                  type="radio"
                  name="gender"
                  value="Enfant"
                  checked={selectedGender === 'Enfant'}
                  onChange={handleInputChange}
                />
                           <span class="checkmark"></span>
                        </label>
                        <label class="gender">Unisex
                        <input
                  type="radio"
                  name="gender"
                  value="Unisex"
                  checked={selectedGender === 'Unisex'}
                  onChange={handleInputChange}
                />
                           <span class="checkmark"></span>
                        </label>
                    </div>
                    </div> */}
                    
                    <div className='deuxInput'>
                    <div className='inputText'>
                       <label for="quantite" class="formbold-form-label"> size </label>
                       <input
                type="text"
                name="size"
                id="size"
                className="formbold-form"
                value={props.size}
                onChange={props.handleInputChange}
              />
                    </div>
                                   
                    </div>
                    
                
            </div>
            <div className='image'>
               <h3>Image</h3>
               <div className='Editproduct'>
                 {/* <div className='color'>
                    <label className='colorP' for="colorP">color</label>
                    <input type="color" id="colorP" name="head" value="#28BD55"/>
                 </div> */}
                 {/* <ImageUpload /> */}
                 <div className='ProductImage'>
                 {/* <div id="displayimage" style={{ backgroundImage: `url(${uploadImage})` }}></div> */}
                 <img src={robe } className='imageProuduct'></img>
                 <label  for="photoP"></label>

                 <input type="file"  id="photoP" name="photoP" accept="image/*" onChange={handleImageUpload} ></input>
                 </div>
               </div>
               <div className='saveB'>
               <button className='save' type='submit'>Save Product</button>
               </div>
            </div>
            
            </form> 
        </div>
    )
}
export default EditP;
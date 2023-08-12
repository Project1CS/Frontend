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
  const m=useParams().mat
  const handleFormSubmit = (event) => {
  event.preventDefault();
  const form = event.target;


  const updatedProduct = {
    nom: form.productname.value,
    matricule: form.matricule.value,
    prix: form.prix.value,
    marque: form.marque.value,
    categorie: form.gender.value,

  };
  axios
    .post(`http://localhost:4000/products/postUpdateGProduct/`+m, updatedProduct, { withCredentials: true })
    .then((response) => {
      window.location.href = `http://localhost:3000/Product-Detail/${form.matricule.value}`;
    })
    .catch((error) => {
      if (error.response) {
        // The request was made, but the server responded with an error status code
        console.error('Error:', error);
        console.error('Response:', error);
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
                
                    <div className='inputText'>
                    <label for="productname" class="formbold-form-label">
                       Product name
                    </label>
                    <input
              type="text"
              name="productName"
              id="productname"
              className="formbold-form"
              value={props.productName}
              onChange={props.handleInputChange}
            />
                    </div>
                    <div className='inputText'>
                    <label for="matricule" class="formbold-form-label">
                       Matricule
                    </label>
                    <input
              type="text"
              name="matricule"
              value={props.matricule}
              id="matricule"
              className="formbold-form"
              onChange={props.handleInputChange}
            />
                    </div>

                    <div className='inputText'>
                    <label for="prix" class="formbold-form-label">
                       Price
                    </label>
                    <input
              type="number"
              name="prix"
              value={props.prix}
              id="prix"
              className="formbold-form"
              onChange={props.handleInputChange}
            />
                    </div>

                    <div className='inputText'>
                    <label for="marque" class="formbold-form-label">
                       Marque
                    </label>
                    <input
              type="text"
              name="marque"
              value={props.marque}
              id="marque"
              className="formbold-form"
              onChange={props.handleInputChange}
            />
                    </div>

                    <div className='categorie'>
                    <p>Categorie</p>
                    <div className="inputcheckbox">

                        
                        <label class="gender">Homme
                        <input
                  type="radio"
                  name="gender"
                  value="Homme"
                  checked={props.selectedGender === 'Homme'}
                  onChange={props.handleInputChange}
                />
                           <span class="checkmark"></span>
                        </label>
                        <label class="gender">Femme
                        <input
                  type="radio"
                  name="gender"
                  value="Femme"
                  checked={props.selectedGender === 'Femme'}
                  onChange={props.handleInputChange}
                />
                           <span class="checkmark"></span>
                        </label>
                        <label class="gender">Enfant
                        <input
                  type="radio"
                  name="gender"
                  value="Enfant"
                  checked={props.selectedGender === 'Enfant'}
                  onChange={props.handleInputChange}
                />
                           <span class="checkmark"></span>
                        </label>
                        <label class="gender">Unisex
                        <input
                  type="radio"
                  name="gender"
                  value="Unisex"
                  checked={props.selectedGender === 'Unisex'}
                  onChange={props.handleInputChange}
                />
                           <span class="checkmark"></span>
                        </label>
                    </div>
                    </div>
                                      
                
            </div>
            <div className='image'>
               <div className='saveB'>
               <button className='save' type='submit'>Save Product</button>
               </div>
            </div>
            
            </form> 
        </div>
    )
}
export default EditP;
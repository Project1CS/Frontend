import './Ajouterp.css'
import { NavLink } from 'react-router-dom';
import photo from '../images/telech.png'
import robe from '../images/robe.jpg'
import axios from 'axios';
import ImageUpload from "./ImageUpload";
import { useState } from 'react';
function AjouterP(){
  const [name, setName] = useState('');
  const [matricule, setMatricule] = useState('');
  const [taille, setTaille] = useState('');
  const [prix, setPrix] = useState('');
  const [marque, setMarque] = useState('');
  const [categorie, setCategorie] = useState('');
  const [quantité, setQuantité] = useState('');
  const [color, setColor] = useState('');
  const [photo,setPhoto]= useState('');
 
  const NameChange = (e) => {
    setName(e.target.value);
  };
  const MatriculeChange=(e)=>{
    setMatricule(e.target.value)
  }
 const TailleChange=(e)=>{
   setTaille(e.target.value)
 }
 const PrixChange=(e)=>{
  setPrix(e.target.value)
}
const MarqueChange=(e)=>{
  setMarque(e.target.value)
}
const CategorieChange=(e)=>{
  setCategorie(e.target.value)
}
const QuantitéChange=(e)=>{
  setQuantité(e.target.value)
}
const ColorChange=(e)=>{
  setColor(e.target.value)
}
const [selectedImage, setSelectedImage] = useState(null);

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  setPhoto(file);
  setSelectedImage(URL.createObjectURL(file));
  // setSelectedImage(event.target.value);
};
// const PhotoChange=(e)=>{
//   const file = e.target.files[0];
//     setPhoto(file);
// }
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('productname', name);
  formData.append('prix', prix);
  formData.append('categorie', categorie);
  formData.append('marque', marque);
  formData.append('taille', taille);
  formData.append('couleur', color);
  formData.append('matricule', matricule);
  formData.append('quantite', quantité);
  formData.append('imageP', photo);
  try {
        const response = await axios.post('http://localhost:4000/products/createProduct', formData,{withCredentials:true});
        console.log('Product added successfully:', formData);
        window.alert('Product Added Successfully')
        window.location.reload()
      } catch (error) {
        window.alert('Please try again')
        console.error('Error adding product:', error);
      }
    };

 
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;

  //   const productData = {
  //     productname: form.productname.value,
  //     prix: form.prix.value,
  //     categorie: form.categorie.value,
  //     marque: form.marque.value,
  //     taille: form.taille.value,
  //     couleur: form.couleur.value,
  //     matricule: form.matricule.value,
  //     quantite: form.quantite.value,
  //     imageP:form.imageP.value
  //   };

  //   try {
  //     const response = await axios.post('http://localhost:4000/products/createProduct', productData);
  //     console.log('Product added successfully:', productData);
  //   } catch (error) {
  //     console.error('Error adding product:', error);
  //   }
  // };
    return(
      <div className='Edit'>
        <h2 className='h2'>Products / <span>Ajouter Products</span> </h2>
        <form onSubmit={handleSubmit}>
            <div className='AjouterInfo'>
                <h3>General information</h3>
                 
                    <div className='inputText'>
                        <label for="productname" class="formbold-form-label"> Product name</label>
                        <input type="text" name="productname" id="productname" class="formbold-form" onChange={NameChange} />
                    </div>
                    <div className='inputText'>
                        <label for="matricule" class="formbold-form-label">Matricule</label>
                        <input type="text" name="matricule" id="matricule" class="formbold-form" onChange={MatriculeChange} />
                    </div>
                    <div className='deuxInput'>
                    <div className='inputText'>
                       <label for="taille" class="formbold-form-label"> taille </label>
                       <input type="text" name="taille"  id="taille" class="formbold-form" onChange={TailleChange} />
                    </div>
                    <div className='inputText'>
                       <label for="quantite" class="formbold-form-label"> Quantité </label>
                        <input type="number" name="quantite" id="quantite" class="formbold-form" onChange={QuantitéChange} />
                    </div>
                    
                    </div>
                    <div className='deuxInput'>
                    <div className='inputText'>
                       <label for="prix" class="formbold-form-label"> Prix </label>
                       <input type="text" name="prix"  id="prix" class="formbold-form" onChange={PrixChange} />
                    </div>
                    <div className='inputText'>
                       <label for="marque" class="formbold-form-label"> Marque </label>
                        <input type="text" name="marque" id="marque" class="formbold-form" onChange={MarqueChange} />
                    </div>
                    
                    </div>
                    <div className='categorie'>
                         <p>Categorie</p>
                         <div className="inputcheckbox">
                           <label class="gender">Homme
                              <input type="radio" name="categorie" value="homme" onChange={CategorieChange} />
                              <span class="checkmark"></span>
                           </label>
                           <label class="gender">Femme
                              <input type="radio" name="categorie" value="femme" onChange={CategorieChange}/>
                              <span class="checkmark"></span>
                           </label>
                           <label class="gender">Enfant
                               <input type="radio" name="categorie" value="enfant" onChange={CategorieChange} />
                               <span class="checkmark"></span>
                           </label>
                           <label class="gender">Unisex
                               <input type="radio" name="categorie" value="unisex" onChange={CategorieChange} />
                               <span class="checkmark"></span>
                           </label>
                         </div>
                    </div>
                    <div className='inputText'>
                        <label for="colorP" class="formbold-form-label">Color</label>
                        <input type="text" name="couleur" id="color" class="formbold-form" onChange={ColorChange} />
                    </div>
                   
                    {/* <div className='inputText'>
                      <label for="quantite" class="formbold-form-label"> Prix </label>
                      <input type="text" name="quantite" id="quantite" class="formbold-form" />
                    </div>
                    <div className='inputText'>
                      <label for="quantite" class="formbold-form-label"> Marque </label>
                      <input type="text" name="quantite" id="quantite" class="formbold-form" />
                    </div> */}
                  
                   
  
                 
                 
                
                {/* </div> */}
                    
                
            </div>

            <div className='image'>
               <h3>Image</h3>
               <div className='Editproductt'>
               {/* <div className='inputText'>
                      <label for="quantite" class="formbold-form-label"> Color </label>
                      <input type="text" name="quantite" id="quantite" class="formbold-form" />
                    </div> */}
                 
                 {/* <ImageUpload /> */}
                 {/* <div className='ProductImage'>
                
                 <img src='' className='imageProuduct'></img> */}
                 {/* <ImageUpload photo={photo}    /> */}
                 <div className="image-upload">
     {selectedImage && (
        <div className="image-preview">
          <img src={selectedImage } alt="Preview" className="preview-image" />
        </div>
      )}
      <label htmlFor="upload" className="upload-label">
        Choose an image
      </label>
      <input
      name="imageP"
        type="file"
        id="upload"
        accept="image/*"
        onChange={handleImageUpload} 
        
      />
     
    </div>
                 {/* <label htmlFor="upload" className="upload-label">
        Choose an image
      </label>
      <input
      name="imageP"
        type="file"
        id="upload"
        accept="image/*"
        onChange={PhotoChange} 
        
      />
                  */}
                 {/* </div> */}
               </div>
               <div className='saveB'>
               <button className='save' type='submit'>Save Product</button>
               </div>
            </div>
            
            </form> 
        </div>
    )

                
       
//         <div class="formbold-main-wrapper">
  
//   <div class="formbold-form-wrapper">

//     <form action="" method="POST">

//       <div class="formbold-input-flex">
//         <div>
//           <label for="productname" class="formbold-form-label">
//             Product name
//           </label>
//           <input
//             type="text"
//             name="productname"
//             id="productname"
//             class="formbold-form-input"
//           />
//         </div>
//         <div>
//           <label for="prix" class="formbold-form-label"> Prix </label>
//           <input
//             type="text"
//             name="prix"
//             id="prix"
//             class="formbold-form-input"
//           />
//         </div>
//       </div>

//       <div class="formbold-input-flex">
//         <div>
//           <label for="categorie" class="formbold-form-label"> Categorie </label>
//           <input
//             type="categorie"
//             name="categorie"
//             id="categorie"
//             class="formbold-form-input"
//           />
//         </div>
//         <div>
//           <label for="Marque" class="formbold-form-label"> Marque </label>
//           <input
//             type="text"
//             name="Marque"
//             id="Marque"
//             class="formbold-form-input"
//           />
//         </div>
//       </div>
//       <div class="formbold-input-flex">
//         <div>
//           <label for="taille" class="formbold-form-label"> Taille </label>
//           <input
//             type="text"
//             name="taille"
//             id="state"
//             class="formbold-form-input"
//           />
//         </div>
//         <div>
//           <label for="couleur" class="formbold-form-label"> Couleur </label>
//           <input
//             type="text"
//             name="couleur"
//             id="country"
//             class="formbold-form-input"
//           />
//         </div>
//       </div>

//       {/* <div class="formbold-input-flex"> */}
//         {/* <div>
//           <label for="marque" class="formbold-form-label"> Marque</label>
//           <input
//             type="text"
//             name="marque"
//             id="marque"
//             class="formbold-form-input"
//           />
//         </div> */}
//         <div className='button'>
        
//         <button class="formbold-btn"> Ajouter</button>
        
//         {/* </div> */}
//       </div>
//     </form>
//   </div>
// </div>

        
//     )
}
export default AjouterP;
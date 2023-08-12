import Sidebar from "../components/Sidebar";
import Header from "../components/HeaderAdmin";
import EditP from '../components/EditP'
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
function EditProduct(){
    const {id}=useParams();
    const [quantite, setQuantite] = useState('');
    const [size, setSize] = useState('');
    const [couleur, setCouleur] = useState('');
    const [matricule,setMatricule]=useState('')
    const [product, setProduct] = useState([]);
    const [username,setUsername]=useState([]);
  
    useEffect(() => {
      axios.get(`http://localhost:4000/products/getUpdateProduct/${id}`, { withCredentials: true })
        .then((response) => {
          const productData = response.data.product;
          setProduct(productData);
          setMatricule(productData[0].matricule)
          setQuantite(productData[0].quantite);
          setSize(productData[0].taille);
          setCouleur(productData[0].couleur);
          if (response.data.token) {
            setUsername(response.data.token.username);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []); 
    
     const handleInputChange = (event) => {
     const { name, value } = event.target;
  
     switch (name) {
       case 'quantite':
         setQuantite(parseInt(value));
         break;
       case 'size':
         setSize(value);
         break;
       case 'couleur':
         setCouleur(value);
         break;
       default:
         break;
     }
   };



    return(
        <div className="content">
            
        <Sidebar/>
        <div className='center'>
        <Header username={username}/>
        <EditP product={product} quantite={quantite} size={size} couleur={couleur} matricule={matricule} 
        id={id} handleInputChange={handleInputChange}/>
        </div>
    
</div>
    )
}
export default EditProduct;
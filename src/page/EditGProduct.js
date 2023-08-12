import Sidebar from "../components/Sidebar";
import Header from "../components/HeaderAdmin";
import EditGP from '../components/EditGP'
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
function EditGProduct(){
    const {mat}=useParams();
    const [prix, setPrix] = useState('');
    const [marque, setMarque] = useState('');
    const [categorie, setcategorie] = useState('');
    const [matricule,setMatricule]=useState('')
    const [productName,setProductName]=useState('')
    const [product, setProduct] = useState([]);
    const [username,setUsername]=useState([]);
  
    useEffect(() => {
      axios.get(`http://localhost:4000/products/getUpdateGProduct/${mat}`, { withCredentials: true })
        .then((response) => {
          const productData = response.data.product;
          console.log(mat)
          setProduct(productData);
          setProductName(productData[0].nom)
          setMatricule(productData[0].matricule)
          setcategorie(productData[0].categorie);
          setPrix(productData[0].prix);
          setMarque(productData[0].marque);
          
          if (response.data.token) {
            setUsername(response.data.token.username);
          }
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
    }, []); 
    
     const handleInputChange = (event) => {
     const { name, value } = event.target;
  
     switch (name) {
       case 'marque':
         setMarque(value);
         break;
       case 'gender':
         setcategorie(value);
         break;
       case 'prix':
         setPrix(parseInt(value));
         break;
       case 'productName':
            setProductName(value);
            break;
       case 'matricule':
                setMatricule(value);
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
        <EditGP product={product} marque={marque} selectedGender={categorie} productName={productName} matricule={matricule} 
        prix={prix} handleInputChange={handleInputChange}/>
        </div>
    
</div>
    )
}
export default EditGProduct;
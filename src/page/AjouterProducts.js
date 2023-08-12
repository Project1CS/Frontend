import Sidebar from "../components/Sidebar";
import Header from "../components/HeaderAdmin";
import AjouterP from "../components/AjouterP";
import "./AjouterProd.css"
function Ajouterproducts(){
    return(
        <div className="content">
            
        <Sidebar/>
        
        <div className='center'>
        <Header/>
        <AjouterP/>
        </div>
    
</div>
    )
}
export default Ajouterproducts;
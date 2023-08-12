import Sidebar from "../components/Sidebar";
import Header from "../components/HeaderAdmin";
import EditP from '../components/EditP'
import DashbordContent from "../components/DashbordContent";
function Dashbord(){
    return(
        <div className="content">
            
        <Sidebar/>
        <div className='center'>
        <Header titre={'Dashbord'}/>
        <DashbordContent/>
        
        </div>
    
</div>
    )
}
export default Dashbord;
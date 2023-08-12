import HeaderAdmin from "../components/HeaderAdmin"
import Sidebar from "../components/Sidebar"
import AdminForme from '../components/AdminForme'
function ProfileAdmin(){
    return(
       
         <div className="content">
            
            <Sidebar/>
            
            <div className='center'>
            <AdminForme />
            
            </div>


        </div>
    )
}
export default ProfileAdmin;
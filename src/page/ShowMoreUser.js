import Sidebar from "../components/Sidebar"
import Header  from "../components/HeaderAdmin"
import  ContentShmore from '../components/ContentShMoreUser'

function ShowMoreUser(){
    return(
        
            <div className="content">
                
                    <Sidebar/>
                    <div className='center'>
                    <Header titre={'Users'}/>
                    <ContentShmore/>
    
                    </div>
                
            </div>
        
    )
    
}
export default ShowMoreUser
import Sidebar from "../components/Sidebar"
import Header  from "../components/HeaderAdmin"
import ContentOrders from '../components/contentOrders'

function Orders(){
    return(
        
            <div className="content">
                
                    <Sidebar/>
                    <div className='center'>
                    <Header/>
                    <ContentOrders/>
    
                    </div>
                
            </div>
        
    )
    
}
export default Orders
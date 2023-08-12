import Sidebar from "../components/Sidebar"
import Header  from "../components/HeaderAdmin"

import ContentOrderDetail from '../components/ContentOrderDetail'

function OrderDetail(){
    return(
        
            <div className="content">
                
                    <Sidebar/>
                    <div className='center'>
                    <Header/>
                    <ContentOrderDetail/>
    
                    </div>
                
            </div>
        
    )
    
}
export default OrderDetail
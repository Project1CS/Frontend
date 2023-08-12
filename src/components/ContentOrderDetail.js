import robe from '../images/robe.jpg'
import './ContentOrderDetail.css'
 function ContentOrderDetail(){
    return(
        <div className='contentShh'>
            <div className='divTitre'>
                    <p className='Titre'>User Information</p>
                 </div>
            <div className='InfoUser'>
               
                <table className='ShInfoUser'>
                    <thead>
                     <tr>
                      <th>Id Order </th>
                      <th>Id User </th>
                      <th>Full Name</th>
                      <th>Phone Number</th>
                      <th>Delivery Address</th>
                      <th> Total</th>
                      <th>Status</th>
                     </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>1111</td>
                       <td>1111</td>
                       <td>IKRAM SAFIA</td>
                       <td>0656195204</td>
                       <td>Address</td>
                       <td> 100000</td>
                       <td>Active</td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className='divTitre'>
                    <p className='Titre'>Order items</p>
                 </div>
            <div className='InfoOrders'>
                 
                <table className='tableOrdersUser'>
                 <thead>
                 <tr>
                      <th> ID Product </th>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>QUANTITY</th>
                      
                      <th>Price</th>
                      <th>Total</th>
                     </tr> 
                 </thead>
                 <tbody>
                   <tr>
                    <td>2222</td>
                    <td><img src={robe}></img></td>
                    <td>Robe</td>
                    <td>3</td>
                   
                    <td>1000DZ</td>
                    <td>3000DZ</td>
                   </tr>
                   <tr>
                    <td>2222</td>
                    <td><img src={robe}></img></td>
                    <td>Robe</td>
                    <td>3</td>
                    
                    <td>1000DZ</td>
                    <td>3000DZ</td>
                   </tr>
                   <tr>
                    <td>2222</td>
                    <td><img src={robe}></img></td>
                    <td>Robe</td>
                    <td>3</td>
                   
                    <td>1000DZ</td>
                    <td>3000DZ</td>
                   </tr>
                   <tr>
                    <td>2222</td>
                    <td><img src={robe}></img></td>
                    <td>Robe</td>
                    <td>3</td>
                   
                    <td>1000DZ</td>
                    <td>3000DZ</td>
                   </tr>
                 </tbody>
                </table>
             
            </div>
        </div>
    )
 }
 export default ContentOrderDetail

import robe from  '../images/robe.jpg'
import Customer from '../images/users.png'
import order from '../images/order.png'
import produit from '../images/produit.png'
import Profit from '../images/Profit.png'
function DashbordContent(){
    return(
        <div className='contentDashbord'>
            <div className='centerDashbord'>
                <div className='topDashbord'>
                   <div className='TitreText'>
                      <h3>Analytics</h3>
                    </div>
                    <div className='cards'>
                    <div className='card'>
                        <div className='Image'>
                            <img src={order}></img>
                        </div>
                        <div className='cardText'>
                            <h3>1240</h3>
                            <p>Total Order</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Image'>
                            <img src={Customer}></img>
                        </div>
                        <div className='cardText'>
                            <h3>1240</h3>
                            <p>Total Customer</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Image'>
                            <img src={Profit}></img>
                        </div>
                        <div className='cardText'>
                            <h3>1240</h3>
                            <p>Total Profit</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='Image'>
                            <img src={produit}></img>
                        </div>
                        <div className='cardText'>
                            <h3>1240</h3>
                            <p>Total Products </p>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className='bottomDashbord'>
                <div className='TitreText'>
                    <h3>Recent Orders</h3>
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
                    
                  </tbody>
                 </table>
              
             </div>
             
             
            

                </div>
            </div>
            <div className='rightDashbord'>
            
                <div className='TitreText'>
                    <h3>Top Products</h3>
                </div>
                <div>
                    <div className='TopProducts'>
                       <div className='cardProduct'>
                        <div className='Product-photo'>
                            <img src={robe}></img>
                         
                        </div>
                        <div className='product-info'>
                        <p><b>Product Name</b></p>
                            <p>prix <b>DZ</b></p>
                        </div>
                        <div class="num-sale">
                            <p>300 sale</p>
                        </div>
                       </div>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default DashbordContent
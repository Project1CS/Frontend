import { Component } from "react";
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import ProductsAdmin from './page/ProdcutsAdmin'
import Users from './page/Users'
import Ajouterproducts from './page/AjouterProducts';
import EditProduct from './page/EditProduct';
import ProdcutsDetail from "./page/ProductDetail"
import Prodcuts from "./page/Products";
import ProdcutsDetails from "./page/Product-Details";
import Cart from './page/Cart'
import Wishlist from './page/Wishlist'
import Signup from './page/Signup'
import Signin from './page/Signin'
import EditGProduct from './page/EditGProduct'
import ProductDetailAdmin from './page/ProductDetailAdmin'
import ProfileAdmin from "./page/ProfileAdmin"
import Account from "./page/Account";
import ChangePassword from "./page/ChangePassword";
import ShippingAddress from "./page/ShippingAddress";
import Orders from "./page/Orders";
import Payment from "./page/Payment";
import OrderDetail from "./page/OrderDetail";
import UserOrders from "./page/UserOrders";
import Dashbord from './page/Dashbord';
import ShowMoreUser from './page/ShowMoreUser'
import Home from './page/Home'

function App (){
    
    return(
        <BrowserRouter>
          <Routes>
           <Route path="/Products" element={<Prodcuts />} />
           <Route path="/Wishlist" element={<Wishlist />} />
           <Route path="/Product" element={<ProductsAdmin />} />
           <Route path="/ProductDetails/:id" element={<ProdcutsDetails />} />
           <Route path="/Cart" element={<Cart />} />
           <Route path="/Signup" element={<Signup />} />
           <Route path="/Signin" element={<Signin />} />
           <Route path="/Product-Detail/:matricule" element={<ProductDetailAdmin />} />
           <Route path="/Users" element={<Users />} />
           <Route path="/AjouterProduct" element={<Ajouterproducts />} />
           <Route path="/EditProduct/:id" element={<EditProduct />} />
           <Route path="/ProductDetail" element={<ProdcutsDetail />} />
           <Route path="/EditGeneralProduct/:mat" element={<EditGProduct />} />   
           <Route path="/Setting" element={<ProfileAdmin />} />
           <Route path="/Account" element={<Account />} />
           <Route path="/ChangePassword" element={<ChangePassword />} />  
           <Route path="/ShippingAddress/:total" element={<ShippingAddress />} /> 
           <Route path="/Orders" element={<Orders />} />
           <Route path="/Payment" element={<Payment />} />
           <Route path="/OrderDetail/:id" element={<OrderDetail/>} />
           <Route path="/UserOrders" element={<UserOrders/>} />
           <Route path="/Dashbord" element={<Dashbord/>}/>
           <Route path="/ShowMoreUser/:id" element={<ShowMoreUser />} />
           </Routes>
        </BrowserRouter>
    )
  
}
export default App
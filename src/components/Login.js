import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../images/Logo.png';
import axios from "axios";
import '../css/loginsignup.css';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
      
        const UserData = {
          email: form.email.value,
          password: form.password.value,
        };
          const response = await axios.post('http://localhost:4000/users/login', UserData, { withCredentials:true})
          .then((response)=>{
            if (response.data.token) {
              if (response.data.user.role===0){
                window.location.href = 'http://localhost:3000/Product';
              }else window.location.href = 'http://localhost:3000/Products';
            }
          }).catch((error)=>{
            window.alert('Email or password is incorrect!');
          })
                       
         
        }
      

    return (
        <>
         <div className="line"> 
         <Link to={'/Products'}>
           <img id="header2" src={logo} />
         </Link>
            </div>
          <section className="sec">
          <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
                        <label htmlFor="email">
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            id="email"
                        />
                        <label htmlFor="password">
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                        />

                        <button>Sign In</button>
                    <p>
                        Don't have an account ?<br />
                        <span>
                        <Link to={'/Signup'}>
                        <a>Register</a>       
                       </Link>
                        </span>
                    </p>
                    </form>
          </section>
        </>
    )
}

export default Login;
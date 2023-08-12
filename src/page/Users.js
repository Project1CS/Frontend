import "./Users.css"
import Sidebar from "../components/Sidebar";
import Header from "../components/HeaderAdmin";
import ContentUsers from '../components/contentUsers';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Users(){

    const [users, setUsers] = useState([]);
    const [username, setUsername]=useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/users/getAllUsers',{withCredentials:true}).then((response) => {
        setUsers(response.data.user);

        if (response.data.token) {
          setUsername(response.data.token.username);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }, []);


    return(
        <div className="content">
            
        <Sidebar/>
        <div className='center'>
        <Header username={username}/>
        <ContentUsers users={users}/>
        

        </div>
    
</div>
    )
}
export default Users;
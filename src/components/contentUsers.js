import { Link } from 'react-router-dom';
import {FaEllipsisV,FaPlus,FaEdit} from 'react-icons/fa';
import './contentUsers.css';
import axios from 'axios';

function ContentUsers(props){
  const handleDesactivate = (userId) => {
    axios.put(`http://localhost:4000/users/deleteUser/${userId}`, null,{ withCredentials: true })
    .then( window.location.href = 'http://localhost:3000/Users')
      .catch((error) => {
        console.error('Error:', error);
      });
  }; 

    return(
        // <div className="contentUser">
        //     <div className="top">
        //         <p>Dashbord /<span> Users </span></p>
        //         <button> <i><FaPlus/></i>
        //          <NavLink to="/AjouterUser" className="add"> Add User </NavLink>
        //         </button>
        //     </div>
        //     <div className="tableUsers">
        //       <table>
        //         <thead>
        //          <tr>
        //            <th>Id</th>
        //            <th>Full Name</th>
        //            <th>Address</th>
        //            <th>Email</th>
        //            <th>Status</th>
        //            <th>Action</th>

        //          </tr>

        //         </thead>
        //          <tbody>
        //          {props.users.map((user) => (
        //       <tr key={user.id}>
        //         <td>{user.id}</td>
        //         <td>{user.username}</td>
        //         <td>{user.address}</td>
        //         <td>{user.email}</td>
        //         <td>{user.activeAccount}</td>
        //         <td className='action'>
        //               <NavLink className="navlink" onClick={() => handleDesactivate(user.id)}>
        //               {user.activeAccount === 0 ? "Activate" : "Deactivate"}
        //               </NavLink>
        //               <i><FaEdit/></i>
        //             </td> 
        //         </tr>
        //           ))}  
        //          </tbody>

        //       </table>

        //     </div>

        // </div>
        <div className="contentUser">
            <div className="top">
                <p>Dashbord /<span> Users </span></p>
            </div>
            <div className="tableUsers">
              <table className='UsersTable'>
                <thead>
                 <tr>
                   <th>Id</th>
                   <th>Full Name</th>
                   <th>Email</th>
                   <th>Address</th>
                   <th>Status</th>
                   <th>Action</th>

                 </tr>

                </thead>
                 <tbody>
                 {props.users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                 <td>{user.username}</td>
                 <td>{user.email}</td>
                 <td>{user.address}</td>
                 <td className='activ'>{user.activeAccount === 1 ? 'Active' : 'Desactivated'}</td>
                    <td className='action'>
                      {/* <Link to={`/ShowMoreUser/${user.id}`} className="navlink">Show more</Link> */}
                      {/* <i><FaEdit/></i> */}
                      <button className='red' onClick={() => handleDesactivate(user.id)}>{user.activeAccount === 0 ? "Activate" : "Deactivate"}</button>
                    </td> 
                   </tr>
                   ))}
                 </tbody>

              </table>

            </div>

        </div>
    )
}
export default ContentUsers;
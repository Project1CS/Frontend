import './contentOrders.css';
import { NavLink, Link } from 'react-router-dom';
import { FaEllipsisV, FaPlus, FaEdit } from 'react-icons/fa';
import { LuMoreVertical } from 'react-icons/lu';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ContentOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/products/getOrders', { withCredentials: true })
      .then((response) => {
        setOrders(response.data.orders);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  function toggleSelect() {
    var select = document.getElementById('list1');
    if (select.style.display === 'none') {
      select.style.display = 'block';
    } else {
      select.style.display = 'none';
    }
  }

  const handleChange = (event, orderId) => {
    const newStatus = event.target.value;
    axios
      .put(
        `http://localhost:4000/products/modifyStatus/${orderId}`,
        { newStatus },
        { withCredentials: true }
      )
      .then((response) => {
        console.log('Modified successfully');
      })
      .catch((error) => {
        console.error('Error ', error);
      });
  };

  return (
    <div className="contentUser">
      <div className="top">
        <p>
          Dashbord /<span> Orders </span>
        </p>
        {/* <button>
          <i>
            <FaPlus />
          </i>
          <NavLink to="/AjouterUser" className="add">
            Add User
          </NavLink>
        </button> */}
      </div>
      <div className="tableUsers">
        <table className="UsersTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Id User</th>
              <th>Full Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Payment</th>
              <th>Status</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.id_user}</td>
                <td>{order.fullname}</td>
                <td>{order.total}DZ</td>
                <td>{order.date_achat}</td>
                <td>
                  {order.paymentOnline === 1 ? 'Credit Card' : 'Hand To Hand'}
                </td>
                <td className="status">
                  <select
                    value={order.état}
                    onChange={(event) => handleChange(event, order.id)}
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="In Preparation">In Preparation</option>
                    <option value="Arrived">Arrived</option>
                  </select>
                  <button className="buttonStatus" onClick={toggleSelect}>
                    <LuMoreVertical />
                  </button>
                </td>
                <td>
                  {/* <Link to={`/OrderDetail/${order.id}`}>
                    <button className="showmore">Show more</button>
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContentOrders;

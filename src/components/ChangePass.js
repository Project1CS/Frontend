import React from 'react';
import '../css/ChangePass.css'; 
import user from '../images/user (3).png';
import { Link, NavLink } from 'react-router-dom';

export default function changePassword () { 
  return (
    <div className="container">
      <main>
        <div className="account-page">
          <div className="profile">
            <div className="profile-detail">
              <img src={user} alt="Profile Image" />
              <h2>Fella Azouza</h2>
            </div>
            <ul>
            <li>
              <Link to={'/Account'}>     
                <a>Account <span>{'>'}</span></a>
                </Link>
                </li>
              <li>
              <Link to={'/ChangePassword'}>
                <a className="active">Change Password <span>{'>'}</span></a>
                </Link>
                </li>
              <li><a href="">Log Out<span>{'>'}</span></a></li>
            </ul>
          </div>
          <div className="account-detail">
            <h2>Password Settings</h2>
            <form>
            <div>
                <label id="fname">Old password</label>
                <input type="password" id="fname" name="fullname" placeholder="Old password" />
              </div>
              <div>
                <label id="fname">New password</label>
                <input type="password" id="fname" name="fullname" placeholder="New password" />
              </div>
              <div>
                <label>Confirm new password</label>
                <input type="password" name="caddress" placeholder="Confirm new password" />
              </div>
              <input type="submit" value="Update" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

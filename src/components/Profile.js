import React from 'react';
import '../css/Profile.css'; 
import user from '../images/user (3).png';
import { Link, NavLink } from 'react-router-dom';

export default function profile () { 
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
                <a className="active">Account <span>{'>'}</span></a>
                </Link>
                </li>
              <li>
              <Link to={'/ChangePassword'}>
                <a>Change Password <span>{'>'}</span></a>
                </Link>
                </li>
              <li><a href="">Log Out<span>{'>'}</span></a></li>
            </ul>
          </div>
          <div className="account-detail">
            <h2>Account Settings</h2>
            <form>
              <div>
                <label id="fname">Full Name</label>
                <input type="text" id="fname" name="fullname" placeholder="Full name" />
              </div>
              <div>
                <label>Full Address</label>
                <input type="text" name="caddress" placeholder="Full address" />
              </div>
              <div>
                <label id="wilaya">Wilaya</label>
                <select name="wilaya">
                  <option value=""> ---Select a Wilaya--- </option>
                  <option value="chlef">Chlef</option>
                  <option value="biskra">Biskra</option>
                  <option value="laghouat">Laghouat</option>
                  <option value="alger">Alger</option>
                  <option value="tlemcen">Tlemcen</option>
                </select>
              </div>
              <div>
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="name@example.com" autoComplete="off" />
              </div>
              <div>
                <label>Mobile</label>
                <input type="text" placeholder="+213 660606060" name="mobile" minLength="10" maxLength="10" />
              </div>
              <input type="submit" value="Update" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}


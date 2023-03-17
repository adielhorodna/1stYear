import React from 'react';
import { NavLink } from 'react-router-dom';


// The Header component will display 
// the website title and links to 
// the Main Page, CreateScribble, and MyAccount components.

function Header() {
  return (
    <div className="header">
      <h1>
        <NavLink to="/">1st Year</NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/scribble">Create Scribble</NavLink>
          </li>
          <li>
            <NavLink to="/my_account">My Account</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

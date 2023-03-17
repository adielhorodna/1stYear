import React from 'react';
import { Link } from 'react-router-dom';


// The Header component will display 
// the website title and links to 
// the Main Page, CreateScribble, and MyAccount components.

function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">1st Year</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/scribble">Create Scribble</Link>
          </li>
          <li>
            <Link to="/my_account">My Account</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';


// The Header component will display 
// the website title and links to 
// the Main Page, CreateScribble, and MyAccount components.

function Header({user, setUser}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

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
     
      <button onClick={handleLogoutClick}> Logout
      </button>
 
    </div>

  );
}





export default Header;

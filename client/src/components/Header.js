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
      <Nav>
      <Button onClick={handleLogoutClick}> Logout
      </Button>
      </Nav>
    </div>

  );
}


// return (
//   <Wrapper>
//     <Logo>
//       <Link to="/">Reciplease</Link>
//     </Logo>
//     <Nav>
//       <Button as={Link} to="/new">
//         New Recipe
//       </Button>
//       <Button variant="outline" onClick={handleLogoutClick}>
//         Logout
//       </Button>
//     </Nav>
//   </Wrapper>
// );
// }

// const Wrapper = styled.header`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 8px;
// `;

// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 0;
//   line-height: 1;

//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 4px;
//   position: absolute;
//   right: 8px;
// `;

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Heading, HStack, Spacer } from '@chakra-ui/react'

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

    <div className="header" style={{ padding: "25px" }}>
   <HStack spacing={4} alignItems="center" justifyContent="space-between">
        <Heading mr={4} color="#FF878E">
        <NavLink to="/">1st Year</NavLink>
        </Heading>
        <Spacer />
      <nav>
      {/* <NavLink to="/scribble">Create Scribble</NavLink> */}
      <HStack spacing={4} ml="auto">
          <Button
              as={NavLink}
              to="/scribble"
              variant="outline"
              // colorScheme="pink"
              borderRadius="full"
              size="sm"
              bgColor="white"
              _active={{ bg: '#555555'}}
              color="#FF878E"
            >
            Create Scribble
            </Button>
        
            {/* <NavLink to="/my_account">My Account</NavLink> */}
            <Button
              as={NavLink}
              to="/my_account"
              variant="outline"
              // colorScheme="pink"
              borderRadius="full"
              size="sm"
              bgColor="white"
              _active={{ bg: '#555555'}}
              color="#FF878E"
            >
              My Account
            </Button>
            </HStack>
      </nav>
     
      {/* <button onClick={handleLogoutClick}> Logout
      </button> */}
      <Button onClick={handleLogoutClick} variant="outline"  bgColor="white"
              _active={{ bg: '#555555'}}
              color="#FF878E" borderRadius="full"
      //  px="4">
      size="sm">
        Logout
      </Button>
      </HStack>

    </div>

  );
}


export default Header;





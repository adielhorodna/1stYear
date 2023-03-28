import React, { useState } from "react";

import {useHistory} from "react-router-dom"

import {Box,Button,FormControl,FormLabel,Input,Stack,Text,Center, Heading} from "@chakra-ui/react";



//user, setUser, bc thats the prop in login component.

function Signup({ user,setUser }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
let history = useHistory();



  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    // setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first,
        last,
        email,
        username,
        password,
      //  confirmation_password:confirmPassword,
      })
      })
    .then(resp => {
      // 201 bc thats the status code for created
      if(resp.status === 201) {
        return resp.json()
      } else {
        throw new Error('Something went wrong')
      }
    })
    .then (data => setUser(data))
    .catch(error =>  setErrors(error.message))
    history.push("/")
  }


  return (

// <form onSubmit={handleSubmit}>
//   {errors && <p>{errors}</p>}

// <input className = "signup"
//   type="text"
//   placeholder="First Name"
//   id="first"
//   autoComplete="off"
//   value={first}
//   onChange={(e) => setFirst(e.target.value)}
// />


// <input className = "signup"
//   type="text"
//   placeholder="Last Name"
//   id="last"
//   autoComplete="off"
//   value={last}
//   onChange={(e) => setLast(e.target.value)}
// />


// <input className = "signup"
//   type="text"
//   placeholder="Username"
//   id="username"
//   autoComplete="off"
//   value={username}
//   onChange={(e) => setUsername(e.target.value)}
// />


// <input className = "signup"
//   type="text"
//   placeholder="Email"
//   id="email"
//   autoComplete="off"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
// />


// <input className = "signup"
//   type="password"
//   placeholder="Password"
//   id="password"
//   value={password}
//   onChange={(e) => setPassword(e.target.value)}
//   autoComplete="current-password"
// />
// {/* 
//  <input className = "signup"
//   type="password"
//   placeholder="Confirm Password"
//   id="confirm_password"
//   value={confirmPassword}
//   onChange={(e) => setConfirmPassword(e.target.value)}
//   autoComplete="current-password"
// />  */}


// <button type="submit"> Sign Up </button>

// </form>
// );
// }
      <Box>
         <Box my="8" textAlign="center">
      <Center>
        <Box width="400px" marginTop="50px">
          <Heading  as="h1" size="md" mb="4"> 
       
         
            Sign up to 1st Year
          </Heading>
          <form onSubmit={handleSubmit}>
            {errors && <Text color="red">{errors}</Text>}
            <Stack spacing={3}>
              <FormControl>
                <Input
                  type="text"
                  placeholder="First Name"
                  id="first"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="text"
                  placeholder="Last Name"
                  id="last"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="text"
                  placeholder="Username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button type="submit" mt={4} bgColor="#FF878E" color="white" _active={{ bg: '#555555'}}>
               Sign Up
                </Button>
             
            </Stack>
          </form>
          <Text marginTop="10px">
          </Text>
        </Box>
      </Center>
    </Box>
    </Box>
  );
}


export default Signup;

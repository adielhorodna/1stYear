import React, { useState } from "react";
import {useHistory} from "react-router-dom"

import {Box,Button,FormControl,FormLabel,Input,Stack,Text,Heading} from "@chakra-ui/react";



function LoginForm({ user,setUser }) {
  // const [loginDetails, setLoginDetails] = useState ({username: "", password: ""})
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then(resp => {
      if(resp.status === 200) {
        return resp.json()
      } else {
        throw new Error('Something went wrong')
      }
    })
    // doesnt open the app if theres a login error:
    .then (data => setUser(data))
    .catch(error =>  setErrors(error.message))

// push them to this component once logged in:
history.push("/")

}

  return (

    <Box my="8" textAlign="center">
    <form onSubmit={handleSubmit}>
      {errors && <Text color="red.500">{errors}</Text>}
      <Heading as="h1" size="md" mb="4">Log In to 1st Year</Heading>
      <Stack spacing="3">
        <FormControl>
          <Input
            type="text"
            placeholder="Username"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" mt={4} bgColor="#FF878E" color="white" 
        _hover={{ bg: '#C94757' }}
        _active={{ bg: '#555555'}}
        >
        Log In
      </Button>
      </Stack>
    </form>
  </Box>
);
}

//    <form onSubmit={handleSubmit}>
//    {errors && <p>{errors}</p>}
//   <input className = "login"
//     type="text"
//     placeholder="Username"
//     id="username"
//     autoComplete="off"
//     value={username}
//     onChange={(e) => setUsername(e.target.value)}
// />

//   <input className = "login"
//     type="password"
//     placeholder = "Password"
//     id="password"
//     autoComplete="current-password"
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//   />


//   <button type="submit"> Login
//   </button>

  
// </form>
// );
// }

export default LoginForm;

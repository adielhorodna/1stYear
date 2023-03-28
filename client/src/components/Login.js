import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Signup from "./Signup";
// import { ChakraProvider } from '@chakra-ui/react'
import {Box,Button,FormControl,FormLabel,Input,Stack,Text,} from "@chakra-ui/react";



function Login({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (

      <Box maxW="md" mx="auto">
        {showLogin ? (
          <>
            <LoginForm user={user} setUser={setUser} />
            <Text mt="4">
              Don't have an account?{" "}
              <Button variant="link" onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </Text>
          </>
        ) : (
          <>
            <Signup user={user} setUser={setUser} />
            <Text mt="4">
              Already have an account?{" "}
              <Button variant="link" onClick={() => setShowLogin(true)}>
                Log In
              </Button>
            </Text>
          </>
        )}
      </Box>
    );
  }
  
//     <div>
//  {showLogin ? (
//         <>
//           <LoginForm user={user} setUser= {setUser} />
  
//           <p>
//             Don't have an account? &nbsp;
//             <button onClick={() => setShowLogin(false)}>
//               Sign Up
//             </button>
//           </p>
//         </>
//       ) : (
//         <>
//           <Signup user={user} setUser= {setUser}  />

//           <p>
//             Already have an account? &nbsp;
//             <button onClick={() => setShowLogin(true)}>
//               Log In
//             </button>
//           </p>
//         </>

      
//   )}
// </div>

//   );
// }



     
        
export default Login
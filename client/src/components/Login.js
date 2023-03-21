import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Signup from "./Signup";

function Login({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (

    <div>
 {showLogin ? (
        <>
          <LoginForm user={user} setUser= {setUser} />
  
          <p>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <Signup user={user} setUser= {setUser}  />

          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>

      
  )}
</div>
  );
}



     
        
export default Login
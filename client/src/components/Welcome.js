import { useState } from "react";

import Login from "../components/Login";
import Signup from "../components/Signup"

function Welcome({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (

  <div>
     
     {showLogin ? (
       <>
         <Login onLogin={onLogin} />
      
         <p>
           Don't have an account? &nbsp;
           <button onClick={() => setShowLogin(false)}>
             Sign Up
           </button>
         </p>
       </>
     ) : (
       <>
         <Signup onLogin={onLogin} />
        
         <p>
           Already have an account? &nbsp;
           <button  onClick={() => setShowLogin(true)}>
             Log In
           </button>
         </p>
       </>
     )}
     </div>
  
 );
}

export default Welcome 
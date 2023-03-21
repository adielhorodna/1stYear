import { useState } from "react";

import Login from "../components/Login";
import Signup from "../components/Signup";


function Welcome({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
//     <Wrapper>
     
//       {showLogin ? (
//         <>
//           <Login onLogin={onLogin} />
//           <Divider />
//           <p>
//             Don't have an account? &nbsp;
//             <Button color="secondary" onClick={() => setShowLogin(false)}>
//               Sign Up
//             </Button>
//           </p>
//         </>
//       ) : (
//         <>
//           <Signup onLogin={onLogin} />
//           <Divider />
//           <p>
//             Already have an account? &nbsp;
//             <Button color="secondary" onClick={() => setShowLogin(true)}>
//               Log In
//             </Button>
//           </p>
//         </>
//       )}
//     </Wrapper>
//   );
// }
<Wrapper>
     
     {showLogin ? (
       <>
         <Login onLogin={onLogin} />
      
         <p>
           Don't have an account? &nbsp;
           <button color="secondary" onClick={() => setShowLogin(false)}>
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
   </Wrapper>
 );
}

export default Welcome 
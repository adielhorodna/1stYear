import React, { useState } from "react";
import {useHistory} from "react-router-dom"


function Login({ user,setUser }) {
  // const [loginDetails, setLoginDetails] = useState ({username: "", password: ""})
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
.then(resp => resp.json())
.then (data => setUser(data))

// push them to this component once logged in:
//(navigate instead of history.)
history.push("/")

}
// brooke^
// from recipe lab:
//   }
//     .then((r) => {
//       setIsLoading(false);
//       if (r.ok) {
//         r.json().then((user) => onLogin(user));
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }

  return (
   <form onSubmit={handleSubmit}>
   
  <input className = "login"
    type="text"
    placeholder="Username"
    id="username"
    autoComplete="off"
    // value={loginDetails.username}
    value={username}
    onChange={(e) => setUsername(e.target.value)}
/>

  <input className = "login"
    type="password"
    placeholder = "Password"
    id="password"
    autoComplete="current-password"
    // value={loginDetails.password}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />


  <button type="submit"> Login
    {isLoading ? "Loading..." : "Login"}
  </button>

  {/* {errors.map((err) => (
    <Error key={err}>{err}</Error>
  ))}
*/}
</form>
);
}

export default Login;

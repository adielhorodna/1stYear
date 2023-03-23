import React, { useState } from "react";

import {useHistory} from "react-router-dom"

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

<form onSubmit={handleSubmit}>
  {errors && <p>{errors}</p>}

<input className = "signup"
  type="text"
  placeholder="First Name"
  id="first"
  autoComplete="off"
  value={first}
  onChange={(e) => setFirst(e.target.value)}
/>


<input className = "signup"
  type="text"
  placeholder="Last Name"
  id="last"
  autoComplete="off"
  value={last}
  onChange={(e) => setLast(e.target.value)}
/>


<input className = "signup"
  type="text"
  placeholder="Username"
  id="username"
  autoComplete="off"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>


<input className = "signup"
  type="text"
  placeholder="Email"
  id="email"
  autoComplete="off"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>


<input className = "signup"
  type="password"
  placeholder="Password"
  id="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="current-password"
/>
{/* 
 <input className = "signup"
  type="password"
  placeholder="Confirm Password"
  id="confirm_password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  autoComplete="current-password"
/>  */}


<button type="submit"> Sign Up </button>

{/*    
{errors.map((err) => (
  <Error key={err}>{err}</Error>
))} */}

</form>
);
}



export default Signup;

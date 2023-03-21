import React, { useState } from "react";


//user, setUser, bc thats the prop in login component.

function Signup({ onLogin }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
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
        confirmPassword: confirmPassword,
      
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (

<form onSubmit={handleSubmit}>

<input className = "signup"
  type="text"
  id="first"
  autoComplete="off"
  value={first}
  onChange={(e) => setFirst(e.target.value)}
/>


<input className = "signup"
  type="text"
  id="last"
  autoComplete="off"
  value={last}
  onChange={(e) => setLast(e.target.value)}
/>


<input className = "signup"
  type="text"
  id="username"
  autoComplete="off"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>


<input className = "signup"
  type="text"
  id="email"
  autoComplete="off"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>


<input className = "signup"
  type="password"
  id="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="current-password"
/>

<input className = "signup"
  type="password"
  id="confirm_password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  autoComplete="current-password"
/>


<button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

{/*    
{errors.map((err) => (
  <Error key={err}>{err}</Error>
))} */}

</form>
);
}



export default Signup;

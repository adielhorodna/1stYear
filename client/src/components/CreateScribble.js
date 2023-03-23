 import React, { useState } from 'react';
 import {useHistory} from "react-router-dom"
//  The CreateScribble component will allow users 
//  to create a new scribble (text input) that 
//  will be displayed on their MyAccount page. 


function CreateScribble(props) {
  const [scribbleMemory, setScribbleMemory] = useState('');
// console.log(props)
  // I set state to an empty string ^ to clear out form, but  not working 

const user_id = props.user_id;
let history = useHistory();

// const handleScribbleCreated = (data) => {
//   // handle scribble creation
// };


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/scribbles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
  // mom_id is the key that matches the backend, user_id is the value that could be named whatever I want in props.
      body: JSON.stringify({ memory: scribbleMemory, mom_id: user_id}),
    })
      .then((response) => response.json())
      .then((data) => {
        props.onScribbleCreated(data);
        setScribbleMemory('');
        history.push(`/my_account`);
      });
  };




  return (
    <div className="create-scribble">
      <h2>Scribble Away</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Scribble Text:
          <input type="text" value={scribbleMemory} onChange={(event) => setScribbleMemory(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CreateScribble;


 

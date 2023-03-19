 import React, { useState } from 'react';

//  The CreateScribble component will allow users 
//  to create a new scribble (text input) that 
//  will be displayed on their MyAccount page. 


function CreateScribble(props) {
  const [scribbleMemory, setScribbleMemory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/scribbles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    //   TO-DO: change mom id to actual user
      body: JSON.stringify({ memory: scribbleMemory, mom_id:4}),
    })
      .then((response) => response.json())
      .then((data) => {
        props.onScribbleCreated(data);
        setScribbleMemory('');
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


 

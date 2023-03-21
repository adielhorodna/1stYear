 import React, { useState } from 'react';

//  The CreateScribble component will allow users 
//  to create a new scribble (text input) that 
//  will be displayed on their MyAccount page. 


function CreateScribble(props) {
  const [scribbleMemory, setScribbleMemory] = useState('');
//do I make mom id a const in state?

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/scribbles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
  
      body: JSON.stringify({ memory: scribbleMemory, mom_id: mom.id}),
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


 

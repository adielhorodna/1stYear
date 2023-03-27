 import React, { useState } from 'react';
 import {useHistory} from "react-router-dom"

 import { Box,Button,FormControl,FormLabel,Textarea,} from '@chakra-ui/react';
//  The CreateScribble component will allow users 
//  to create a new scribble (text input) that 
//  will be displayed on their MyAccount page. 


function CreateScribble(props) {
  const [scribbleMemory, setScribbleMemory] = useState('');

  // I set state to an empty string ^ to clear out form, but  not working 

const user_id = props.user_id;
let history = useHistory();

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
<Box maxW="xl" m="auto">
      <FormControl>
        <Textarea
          value={scribbleMemory}
          onChange={(event) => setScribbleMemory(event.target.value)}
          placeholder="Scribble on your wall..."
          size="lg"
        />
      </FormControl>
      <Button mt={4} bgColor="#FF878E" color="white"  _active={{ bg: '#555555'}}onClick={handleSubmit}>
        Scribble
      </Button>
    </Box>
  );
}
export default CreateScribble;


 

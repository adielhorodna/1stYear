import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import {useHistory} from "react-router-dom"

import {Box,Button,FormControl,FormLabel,Input,Textarea, Heading, Text} from "@chakra-ui/react";

function EditPost(props) {
  const [postText, setPostText] = useState("");

  const params = useParams();

  const user_id = props.user_id;
  let history = useHistory();
 
  const handleSubmit = (event) => {
    event.preventDefault();
  
      fetch(`/posts/${params.post_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: postText, mom_id: user_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        history.push(`/my_account`);
      });
  };


  return (

<Box maxW="xl" m="auto" mt="8">
      <FormControl>
      <Heading as="h2" size="md" mb="4"> Edit Your Post </Heading>

      <Textarea
          value={postText}
          onChange={(event) => setPostText(event.target.value)}
          placeholder="Type your new post here..."
          size="lg"
        />
      </FormControl>
      <Button mt={4} bgColor="#FF878E" color="white"  _active={{ bg: '#555555'}}onClick={handleSubmit}>
        Save
      </Button>
    </Box>
);
}





   
      
  








//     <div className="edit-post">
//       <h2>Edit Post</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Post Text:
//           <input type="text" value={postText} onChange={(event) => setPostText(event.target.value)} />
//         </label>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// }




export default EditPost;


// The EditPost component has 
// a props.history.push('/my_account') statement 
// that will redirect the user to the "MyAccount"
//  component after the post has been updated. 


//  The Personal Account component has a 
// history.push(`/edit/posts/${currentPost.id}`
//   statement that will redirect the 
//   user to the "EditPost" component when 
//   the "Edit" button is clicked.




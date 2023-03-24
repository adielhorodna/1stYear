import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import {useHistory} from "react-router-dom"


function EditPost(props) {
  const [postText, setPostText] = useState("");

  const params = useParams();

  const user_id = props.user_id;
  let history = useHistory();
 
  const handleSubmit = (event) => {
    event.preventDefault();
  
      fetch(`/posts/${params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: postText, mom_id: user_id, card_id: Number(params.id)  }),
    })
      .then((response) => response.json())
      .then((data) => {
        history.push(`/my_account`);
      });
  };


  return (
    <div className="edit-post">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Post Text:
          <input type="text" value={postText} onChange={(event) => setPostText(event.target.value)} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}




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




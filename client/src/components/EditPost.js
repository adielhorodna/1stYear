import React, { useState } from 'react';

function EditPost(props) {
  const [postText, setPostText] = useState(props.post.text);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/posts/${props.post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: postText }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.onPostUpdated(data);
        props.history.push('/my_account');
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


//////!!!
// Note that the EditPost component has 
// a props.history.push('/my_account') statement 
// that will redirect the user to the "MyAccount"
//  component after the post has been updated. 
//  The Post component has a props.history.push(/edit_post/${props.post.id})
//   statement that will redirect the 
//   user to the "EditPost" component when 
//   the "Edit" button is clicked.




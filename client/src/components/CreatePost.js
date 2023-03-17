import React, { useState } from 'react';

// The CreatePost component will allow users to 
// create new posts for a specific card. 
// This component will be displayed when
//  a user clicks on a card and will include 
//  a form for creating new posts.

function CreatePost(props) {
  const [postText, setPostText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: postText }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.onPostCreated(data);
        setPostText('');
      });
  };

  return (
    <div className="create-post">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Post Text:
          <input type="text" value={postText} onChange={(event) => setPostText(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;

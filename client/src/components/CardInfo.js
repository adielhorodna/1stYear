import React, { useState } from 'react';

// The CardInfo component will display
//  all the information for a single card.
//   This component will be imported into 
// the Cards component and displayed when a 
// user clicks on a card. 
//The associated posts should be displayed on the card.
//The ability to create a new post should 
//also be on each card. 

  
function CardInfo(props) {
  const { card } = props;
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [postText, setPostText] = useState('');

  const handlePostCreated = (data) => {
    // handle post creation
  };

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
        handlePostCreated(data);
        setPostText('');
      });
  };

  return (
    <div className="card-info">
      <h2>{card.title}</h2>
      <p>{card.baby_milestones}</p>
      <p>{card.baby_tips}</p>
      <img src={card.imageUrl} alt={card.title} />

      {showCreatePost && (
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
      )}

      {!showCreatePost && (
        <div className="new-post">
          <h3>Create New Post</h3>
          <button onClick={() => setShowCreatePost(true)}>Create Post</button>
        </div>
      )}
    </div>
  );
}

export default CardInfo;



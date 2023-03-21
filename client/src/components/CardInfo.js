import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
// The CardInfo component will display
//  all the information for a single card.
//   This component will be imported into 
// the Cards component and displayed when a 
// user clicks on a card. 
//The associated posts should be displayed on the card.
//The ability to create a new post should 
//also be on each card. 


function CardInfo(props) {
 const [card, setCard] = useState({})
//  {} starts it off as an empty Object, so can later do card.title
 const params = useParams();


const user_id = props.user_id;
// console.log(props)

  const [showCreatePost, setShowCreatePost] = useState(false);
  const [postText, setPostText] = useState('');

  const handlePostCreated = (data) => {
    // handle post creation
  };

// makes  wtvr you want, ex.  usestate, fetch,  happen right away
  useEffect(() => {
    fetch(`/cards/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCard(data));
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

    //params bc card id is already in the url
    
    // keys have to match to backend
      body: JSON.stringify({ text: postText, mom_id: user_id, card_id: Number(params.id)  }),
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
      <p>Baby Milestone<p>
        </p>{card.baby_milestone}</p>
        <p>Baby Tips<p>
      </p>{card.baby_tips}</p>
      <img src={card.imageUrl} alt={card.title} 
      />

      <div>
        <p> Posts </p>
        {card.posts?.map(post => (
            <div>{post.post}</div>
        ))}
      </div>

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



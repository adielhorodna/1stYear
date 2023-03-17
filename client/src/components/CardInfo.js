import React from 'react';

// The CardInfo component will display
//  all the information for a single card.
//   This component will be imported into 
// the Cards component and displayed when a 
// user clicks on a card. 

function CardInfo(props) {
  const { card } = props;
  return (
    <div className="card-info">
      <h2>{card.title}</h2>
      <p>{card.baby_milestones}</p>
      <p>{card.baby_tips}</p>
      <img src={card.imageUrl} alt={card.title} />
    </div>
  );
}

<div className="new-post">
<h3>Create New Post</h3>
<Link to="/create_post">Create Post</Link>
</div>

export default CardInfo;


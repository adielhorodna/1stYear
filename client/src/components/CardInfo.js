import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
// import PersonalAccount from './PersonalAccount';
import { SimpleGrid } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

// The CardInfo component will display
//  all the information for a single card.
//   This component will be imported into 
// the Cards component and displayed when a 
// user clicks on a card. 
//The associated posts should be displayed on the card.
//The ability to create a new post should 
//also be on each card. 


function CardInfo(props) {
// console.log(props);
 const [card, setCard] = useState({})
 const [showCreatePost, setShowCreatePost] = useState(false);
 const [postText, setPostText] = useState('');
//  const [posts, setPosts] = useState([]);

//  {} starts it off as an empty Object, so can later do card.title
 const params = useParams();
 const user_id = props.user_id;

//  //set state here.
//  redirected to this function in the .then of the posts fetch.
//  setting the state here so that the state updates every time there is a new post created.
//  I had all my posts displaying as card.posts, so adding the post to the card state.

    const handlePostCreated = (newPost) => {
    setCard(prevCard => ({
    ...prevCard,
    posts: [
    ...prevCard.posts,
    // {post: newPost.text, username: newPost.mom.username, ...newPost},
    {post: newPost.text, ...newPost},
  
  ]}))
  console.log(newPost)
    }


  useEffect(() => {
    fetch(`/cards/${params.id}`)
      .then((response) => response.json())
      .then (setCard);
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

      // have the username of post writer appear with their post^^^
    
  };

  return (
  //   <div className="card-info">
  //   <h2>{card.title}</h2>
  //   <p>Baby Milestone<p>
  //     </p>{card.baby_milestone}</p>
  //     <p>Baby Tips<p>
  //   </p>{card.baby_tips}</p>
  //   <img src={card.image_url} alt={card.title} 
  //   />
  //  {/* displaying all my posts: */}
  //   <div>
  //     <p> Posts </p>
  //     {card.posts?.map(post => (

  //         <div> 
  //        {post.post}
  //        {/* {post.username} */}
  //         </div>
  //     ))}
  //   </div>

<Card maxW='sm'>
  <CardBody>
    <Image
    src={card.image_url}
    alt={card.title} 
    borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{card.title}</Heading>
      <Text> BABY MILESTONES </Text>
      <Text> {card.baby_milestone}</Text>
      <Divider />
      <Text> BABY TIPS </Text>
      <Text> {card. baby_tips}</Text>
    </Stack>
  </CardBody>
  <Divider />
  <Text> POSTS </Text>
  {card.posts?.map(post => (
   <Text>{post.post}</Text>
  ))}
    <Input placeholder='Your Post Here' />
  <Text>Create a Post</Text>

  
<Button variant='outline' colorScheme='pink' type="submit" size='md' 
 onClick={() => setShowCreatePost(true)}>
         Post
        
      </Button>


  <CardFooter>
      
  </CardFooter>
</Card>








    // <div className="card-info">
    //   <h2>{card.title}</h2>
    //   <p>Baby Milestone<p>
    //     </p>{card.baby_milestone}</p>
    //     <p>Baby Tips<p>
    //   </p>{card.baby_tips}</p>
    //   <img src={card.image_url} alt={card.title} 
    //   />
    //  {/* displaying all my posts: */}
    //   <div>
    //     <p> Posts </p>
    //     {card.posts?.map(post => (

    //         <div> 
    //        {post.post}
    //        {/* {post.username} */}
    //         </div>
    //     ))}
    //   </div>

    //   {showCreatePost && (
    //     <div className="create-post">
    //       <h2>Create a Post</h2>
    //       <form onSubmit={handleSubmit}>
    //         <label>
    //           Post Text:
    //           <input type="text" 
    //           value={postText} 
    //           onChange={(e) => setPostText(e.target.value)} />
    //         </label>
    //         <button type="submit">Submit</button>
    //       </form>
    //     </div>
    //   )}

    //   {!showCreatePost && (
    //     <div className="new-post">
    //       <h3>Create New Post</h3>
    //       <button onClick={() => setShowCreatePost(true)}>Create Post</button>
    //     </div>
    //   )}
    // </div>
    // // </SimpleGrid>
  );
}

export default CardInfo;



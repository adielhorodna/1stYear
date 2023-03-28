import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom"
import { Link } from 'react-router-dom';
import EditPost from './EditPost';
import DeletePost from './DeletePost';

import {Box,Button,Center,Flex,Heading,IconButton,Spacer,Text,} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'

// TO_DO:
//Also want a fetch (get) to view the user
//persoanl account info.. but maybe thats through login/auth, etc. 


function PersonalAccount(props) {

  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [scribbles, setScribbles] = useState([])

  const user_id = props.user_id;
  let history = useHistory();


  // fetch scribbles:
  useEffect(() => {
    fetch('/scribbles')
      .then(response => response.json())
      .then(data => setScribbles(data))
  }, []);

  // fetch posts:
  useEffect(() => {
    fetch('/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, []);

  const handlePostDeleted = (post) => {
    setPosts(prevPosts => prevPosts.filter(p => p.id !== post.id));
  };

  const handleEditPost = (currentPost) => {
    // setEditingPost(currentPost);
    history.push(`/edit/posts/${currentPost.id}`)
   
};



  return (
    <Box mx="auto" maxW="800px">
    <Tabs>
  <TabList>
    <Tab  color="black" _active={{ color: 'black'}}>All my posts</Tab>
    <Tab  color="black" _active={{ color: 'black'}}>All my scribbles</Tab>
  </TabList> 

  <TabPanels>
    <TabPanel>
      <Box mb="4">
        {posts.map(post => (
          <Box key={post.id} bg="gray.50" borderRadius="md" p="4" my="4">
            <Flex alignItems="center">
              <Text as="h4" size="md" mr="2">{post.text}</Text>
              <Spacer />
              <IconButton
                icon={<DeleteIcon />}
                variant="ghost"
                colorScheme="gray"
                onClick={() => handlePostDeleted(post)}
                aria-label="Delete post"
              />
              <IconButton
                icon={<EditIcon />}
                variant="ghost"
                colorScheme="gray"
                onClick={() => handleEditPost(post)}
                aria-label="Edit post"
              />
            </Flex>
            <Text>{post.content}</Text>
          </Box>
        ))}
      </Box>
    </TabPanel>
    <TabPanel>
      <Box>
        {scribbles.map(scribble => (
          <Box key={scribble.id} bg="gray.50" borderRadius="md" p="4" my="4">
            <Text>{scribble.memory}</Text>
          </Box>
        ))}
      </Box>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
  );
        }

export default PersonalAccount;



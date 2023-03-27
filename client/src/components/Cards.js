import { NavLink } from 'react-router-dom';
import CardInfo from './CardInfo';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// styling imports:
import { Box, Heading, Text } from "@chakra-ui/react";

// should also be importing the create posts?

// The Cards component will display a list of all the cards, 
// each with its title. 
// When a user clicks on a card,
// it should navigate to a page with the full card information. 


function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/cards')
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
<Box display="flex" flexWrap="wrap">
      <Box display="flex"
        flexWrap="wrap"
        alignItems="center"
        mx="auto"
        maxW="1300px"
      >
      {cards.map((card) => (
        <Box
          key={card.id}
          bgColor="#FF878E"
          borderRadius="xl"
          boxShadow="md"
          _hover={{ bg: '#C94757' }}
          _active={{ bg: '#555555'}}
          p={4}
          mx={2}
          my={2}
          width="280px"
          height="260px"
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          // minWidth="300px"
        >
          <NavLink to={`/cards/${card.id}`}>
            
            <Text color="white">Month</Text>
            <Heading as="h2" size="3xl" color="white" mb={2}>
              {card.title}
            </Heading>
          </NavLink>
        </Box>
       
      ))}
    </Box>
    </Box>
  );
}


export default Cards;



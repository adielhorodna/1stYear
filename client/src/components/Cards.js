import { NavLink } from 'react-router-dom';
import CardInfo from './CardInfo';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div className="cards">
  
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <NavLink to={`/cards/${card.id}`}>{card.title}</NavLink>

          </li>
        ))}
      </ul>
    </div>
  );
        }

export default Cards;



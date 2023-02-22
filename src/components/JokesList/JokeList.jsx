// libs
import React from 'react';

// components
import JokeItem from '../JokeItem/JokeItem';

const JokeList = ({ jokes, favouriteJokes, deleteJokeFromFavourite, addJokeToFavourite }) => {
  console.log('JokeList');
  return (
    <>
      {jokes &&
        jokes.map(joke => (
          <JokeItem
            key={joke.id}
            joke={joke}
            favouriteJokes={favouriteJokes}
            deleteJokeFromFavourite={deleteJokeFromFavourite}
            addJokeToFavourite={addJokeToFavourite}
          />
        ))}
    </>
  );
};

export default JokeList;

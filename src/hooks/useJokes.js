// libs
import { useEffect, useState } from 'react';

// utils
import { addJokeToFavourite } from '../utils';

// localStorage
import { setItem, getItem } from '../helpers/localStorage';

// api
import { fetchData } from '../helpers/fetchData';

const useJokes = (id) => {
  const [jokes, setJokes] = useState([]);
  const [favouriteJokes, setFavouriteJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(null);

  // favouriteJokes.find(favouriteJoke => favouriteJoke.id === joke.id)
  console.log('ID', id)

  useEffect(() => {
    fetchData(setJokes, setIsLoading, setError);
  }, []);

  useEffect(() => {
    setItem('jokes', favouriteJokes);
  }, [favouriteJokes]);

  useEffect(() => {
    const jokesFromLocalStorage = getItem('jokes');
    if (jokesFromLocalStorage) setFavouriteJokes(jokesFromLocalStorage);
  }, []);

  const addJokeToFavourite = id => {
    if (favouriteJokes.find(joke => joke.id === id)) return;

    const favouriteJoke = jokes.find(joke => joke.id === id);

    const jokesFromLocalStorage = getItem('jokes');
    if (jokesFromLocalStorage && jokesFromLocalStorage.length >= 10) return;

    setFavouriteJokes([favouriteJoke, ...favouriteJokes]);
  };

  const deleteJokeFromFavourite = id => {
    const updatedFavouriteJokes = favouriteJokes.filter(joke => joke.id !== id);
    setFavouriteJokes(updatedFavouriteJokes);
  };
  // const result = addJokeToFavourite(jokes, favouriteJokes, currentJokeId )

  return {
    jokes,
    isLoading,
    error,
    favouriteJokes,
    addJokeToFavourite,
    deleteJokeFromFavourite,
  }
}

export default useJokes;

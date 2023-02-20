import React, {useEffect, useState} from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Alert,
  Fade,
} from '@mui/material';
import { Delete as DeleteIcon} from '@mui/icons-material';

import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

import { setItem, getItem } from './helpers/localStorage';

import Header from './components/Header/Header';

// import useData from './hooks/useData';

/**
 *
 * @returns {JSX.Element}
 */

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [favouriteJokes, setFavouriteJokes] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [alertVisibility, setAlertVisibility] = useState(false);

  const fetchData = async () => {
    try {
      const result = await fetch('https://api.chucknorris.io/jokes/random');
      const singleJoke = await result.json();
      setJokes(prevJokes => [...prevJokes, singleJoke]);
    } catch(err) {
      console.log('Error', err);
    }
  }

  const initialFetchingData = () => {
    for (let i = 0; i < 10; i++) fetchData();
  }

  // make initial fetching data
  useEffect(() => {
    initialFetchingData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // fetch data every 5 seconds
  // useEffect(() => {
  //   if(jokes.length === 10) {
  //     setInterval(fetchData, 5000)
  //   }
  // },[jokes])

  useEffect(() => {
    const jokesFromLocalStorage = getItem('jokes');
    if(jokesFromLocalStorage) setFavouriteJokes(jokesFromLocalStorage);
  }, [])

  useEffect(() => {
    setItem('jokes', favouriteJokes)
  }, [favouriteJokes])

  const addJokeToFavourite = (id) => {
    if(favouriteJokes.find(joke => joke.id === id)) return;

    const favouriteJoke = jokes.find(joke => joke.id === id);

    const jokesFromLocalStorage = getItem('jokes');
    if (jokesFromLocalStorage && jokesFromLocalStorage.length >= 10) return;

    setFavouriteJokes([favouriteJoke, ...favouriteJokes]);
    setAlertVisibility(true);
  }

  const deleteJokeFromFavourite = (id) => {
    const updatedFavouriteJokes = favouriteJokes.filter(joke => joke.id !== id);
    setFavouriteJokes(updatedFavouriteJokes);
  }

  const changeTab = (event, value) => {
    setCurrentTab(value)
  }

  if(jokes.length < 10) return <LoadingSpinner/>
  // console.log('Favourite', favouriteJokes);

  return (
    <>
    {true && (
      <Fade
        in={alertVisibility}
        timeout={{ enter: 1000, exit: 1000 }}
        addEndListener={() => {
          setTimeout(() => {
            setAlertVisibility(true)
          }, 100000);
        }}
      >
      <Alert severity="success" variant="standard" className="alert">
        You've added joke to favourite
      </Alert>
    </Fade>
    )}
    <div className="App">
      <CssBaseline/>
      <Container maxWidth="md" sx={{backgroundColor: 'rgb(10, 25, 41)', minHeight: '100vh'}}>
        <Header
          changeTab={changeTab}
          currentTab={currentTab}
          title="Jokes"/>
      <Alert severity="success" variant="standard" className="alert">
        You've added joke to favourite
      </Alert>
        <Box role='tabpanel' hidden={currentTab !== 0} sx={{pb: 6}}>
          {jokes.map((joke) => (
            <Card key={joke.id} sx={{marginBottom: '10px', p: '8px'}}>
              <CardContent sx={{padding: '5px'}}>
                <Typography>{joke.value}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color='primary'
                  onClick={() => addJokeToFavourite(joke.id)}
                  disabled={Boolean(favouriteJokes.find(favouriteJoke => favouriteJoke.id === joke.id))}
                >
                  Add
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<DeleteIcon/>}
                  onClick={() => deleteJokeFromFavourite(joke.id)}
                  disabled={favouriteJokes.length === 0 || !favouriteJokes.find(favouriteJoke => favouriteJoke.id === joke.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ) )}
        </Box>
        <Box role='tabpanel' hidden={currentTab !== 1} >
        {favouriteJokes.map((joke) => (
            <Card key={joke.id} sx={{marginBottom: '20px'}}>
              <CardContent sx={{padding: '5px'}}>
                <Typography>{joke.value}</Typography>
              </CardContent>
              <CardActions sx={{padding: '14px'}}>
                <Button variant="outlined" color="secondary" startIcon={<DeleteIcon/>} onClick={() => deleteJokeFromFavourite(joke.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          ) )}
        </Box>
      </Container>
    </div>
    </>
  );
}

export default App;

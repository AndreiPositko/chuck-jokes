// libs
import React from 'react';
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

import useJokes from '../../hooks/useJokes';

// styles
import styles from './styles.module.scss';

const JokeItem = ({ joke, favouriteJokes, addJokeToFavourite, deleteJokeFromFavourite }) => {
  // useJokes(joke.id);
  console.log('Item');
  return (
    <Card
      key={joke.id}
      className={styles.card}
    >
      <CardContent className={styles.cardContent}>
        <Typography>{joke.value}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          color='primary'
          onClick={() => addJokeToFavourite(joke.id)}
          disabled={Boolean(favouriteJokes.find(favouriteJoke => favouriteJoke.id === joke.id))}
        >
          Add
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          startIcon={<DeleteIcon />}
          onClick={() => deleteJokeFromFavourite(joke.id)}
          disabled={favouriteJokes.length === 0 || !favouriteJokes.find(favouriteJoke => favouriteJoke.id === joke.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default JokeItem;

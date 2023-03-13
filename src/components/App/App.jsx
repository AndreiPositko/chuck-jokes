import React, { useState } from 'react';
import { CssBaseline, Container, Typography, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

// components
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Header from '../Header/Header';
import JokeList from '../JokesList/JokeList';

// hooks
import useJokes from '../../hooks/useJokes';

// styles
import styles from './styles.module.scss';

/**
 *
 * @returns {JSX.Element}
 */

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const { jokes, isLoading, error, favouriteJokes, addJokeToFavourite, deleteJokeFromFavourite } = useJokes();

  const changeTab = (event, value) => {
    setCurrentTab(value);
  };

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('He')

  return (
    <div className={styles.app}>
      <CssBaseline />
      <Container
        maxWidth='md'
        className={styles.container}
      >
        <Header
          changeTab={changeTab}
          currentTab={currentTab}
          title='Jokes'
        />
        <Box
          role='tabpanel'
          hidden={currentTab !== 0}
          className={styles.box}
        >
          <JokeList
            currentTab={currentTab}
            jokes={jokes}
            favouriteJokes={favouriteJokes}
            deleteJokeFromFavourite={deleteJokeFromFavourite}
            addJokeToFavourite={addJokeToFavourite}
          />
        </Box>

        <Box
          role='tabpanel'
          hidden={currentTab !== 1}
        >
          <JokeList
            currentTab={currentTab}
            favouriteJokes={favouriteJokes}
            deleteJokeFromFavourite={deleteJokeFromFavourite}
            addJokeToFavourite={addJokeToFavourite}
          />
          {/* {favouriteJokes.map(joke => (
            <Card
              key={joke.id}
              sx={{ marginBottom: '20px' }}
            >
              <CardContent sx={{ padding: '5px' }}>
                <Typography>{joke.value}</Typography>
              </CardContent>
              <CardActions sx={{ padding: '14px' }}>
                <Button
                  variant='outlined'
                  color='secondary'
                  startIcon={<DeleteIcon />}
                  onClick={() => deleteJokeFromFavourite(joke.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))} */}
        </Box>
      </Container>
    </div>
  );
};

export default App;

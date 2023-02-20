export const deleteJokeFromFavourite = (id, setFavouriteJokes) => {
  const updatedFavouriteJokes = favouriteJokes.filter(joke => joke.id !== id);
  setFavouriteJokes(updatedFavouriteJokes);
}

export const changeTab = (event, value) => {
  setCurrentTab(value)
}

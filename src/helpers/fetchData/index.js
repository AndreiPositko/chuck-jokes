// constants
import { url } from '../../constants'

export const fetchData = (setJokes, setIsLoading, setError) => {
  const arrayOfJokesUrls = url.repeat(10).split(' ').splice(0, 10)
  let requests = arrayOfJokesUrls.map(url => fetch(url))

  try {
    Promise.all(requests)
      .then(response => {
        response.forEach(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
        })
        return response;
      })
      .then(responses => Promise.all(responses.map(resp => resp.json())))
      .then(jokes => {
        jokes.forEach(joke => setJokes(prevJoke => [...prevJoke, joke]))
        setIsLoading(false);
      })
  } catch (err) {
    setError(err);
    setIsLoading(false);
  }
}

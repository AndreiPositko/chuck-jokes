import { useState, useEffect } from 'react';

const useData = (url, numberOfApiCall) => {
  const [jokes, setJokes] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();

      setJokes(data);
    };

    dataFetch();
  }, [url]);

  return { data: jokes };
};

export default useData;

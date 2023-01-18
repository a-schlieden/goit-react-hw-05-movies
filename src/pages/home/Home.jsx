import { useEffect, useState } from 'react';

import FilmsList from 'components/FilmsList/FilmsList';
import * as filmsFetch from '../../api/Fetch';


const Home = () => {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    filmsFetch.fetchTrendingMovies().then(result => {
      setFilms(result.results);
    });
  }, []);

  return (
    <>
      <FilmsList filmsArray={films} sublink={'movies/'} />
    </>
  );
};

export default Home;

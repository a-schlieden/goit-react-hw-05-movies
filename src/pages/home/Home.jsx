import { useEffect, useState } from 'react';

//import { Link, useLocation } from 'react-router-dom';
import FilmsList from 'components/FilmsList/FilmsList';
import * as filmsFetch from '../../api/Fetch';
// import * as filmsFetch from '../../api/FilmsApi';

const Home = () => {
  //   const location = useLocation();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    filmsFetch.fetchTrendingMovies().then(result => {
      setFilms(result.results);
    });
  }, []);

  return (
    <>
      {/* {films && ( */}
      {/* <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`} state={{ from: location }}>
              {film.original_title}
            </Link>
          </li>
        ))}
      </ul> */}
      {/* // )} */}
      <FilmsList filmsArray={films} sublink={'movies/'} />
    </>
  );
};

export default Home;

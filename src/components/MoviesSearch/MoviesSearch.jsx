import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as filmsFetch from '../../api/Fetch';
import FilmsList from 'components/FilmsList/FilmsList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();
  const filteredStr = SearchParams.get('query');

  useEffect(() => {
    if (!filteredStr) {
      return
    }
    filmsFetch.fetchSearchMovies(filteredStr).then(result => { setFilms(result.results) });
  }, [filteredStr]);

  const onFormSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.searchfield.value;
    setSearchParams({ query: value });
    event.target.reset();
  };

  return (
    <div>
      <SearchForm onSubmitForm={onFormSubmit} />
      <div>
        <FilmsList filmsArray={films} />
      </div>
    </div>
  );
};

export default Movies;

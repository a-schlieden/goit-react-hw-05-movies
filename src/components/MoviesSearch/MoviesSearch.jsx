import { useState } from "react";
import PropTypes from 'prop-types';
import * as filmsFetch from '../../api/Fetch';
import style from './MoviesSearch.module.css';
import { ReactComponent as Search } from '../../icons/search.svg';
import { useSearchParams } from 'react-router-dom';
//import { Link, useSearchParams, useLocation } from 'react-router-dom';
import FilmsList from "components/FilmsList/FilmsList";

const Movies = () => {
    // const location = useLocation();
    const [searchInput, setSearchInput] = useState('');
    const [films, setFilms] = useState([]);
    const [SearchParams, setSearchParams] = useSearchParams();
    const filter = SearchParams.get('query') ?? ''
    console.log(filter)


    const onDataChange = event => {
        setSearchInput(event.currentTarget.value.toLowerCase());
    };

    const onFormSubmit = event => {
        event.preventDefault();
        if (searchInput.trim() === '') {
            return;
        }
        // onSubmitForm(searchInput);
        filmsFetch.fetchSearchMovies(searchInput).then(result => { setFilms(result.results) });
        setSearchParams({ query: searchInput })
    };

    return (
        <div>
            <form className={style.SearchForm} onSubmit={onFormSubmit}>
                <button type="submit" className={style.SearchFormButton}>
                    <Search width="20" />
                </button>

                <input
                    className={style.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search moviess"
                    value={searchInput}
                    onChange={onDataChange}
                />
            </form>

            <div>

                {/* //   {films && ( */}
                {/* <ul>
                    {films.map(film => (
                        <li key={film.id}>
                            <Link to={`${film.id}`} state={{ from: location }}>{film.original_title}</Link>
                        </li>
                    ))}
                </ul> */}
                {/* //     )} */}
                <FilmsList filmsArray={films} />

            </div>

        </div>
    )
}

export default Movies


Movies.propTypes = {
    onSubmitForm: PropTypes.func,
};
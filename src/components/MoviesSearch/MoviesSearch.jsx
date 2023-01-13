import { useState } from "react";
import PropTypes from 'prop-types';
import style from './MoviesSearch.module.css';
import { ReactComponent as Search } from '../../icons/search.svg';

const Movies = ({ onSubmitForm }) => {
    const [searchInput, setSearchInput] = useState('');

    const onDataChange = event => {
        setSearchInput(event.currentTarget.value.toLowerCase());
    };

    const onFormSubmit = event => {
        event.preventDefault();
        if (searchInput.trim() === '') {
            return;
        }
        onSubmitForm(searchInput);
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
        </div>
    )
}

export default Movies


Movies.propTypes = {
    onSubmitForm: PropTypes.func,
};
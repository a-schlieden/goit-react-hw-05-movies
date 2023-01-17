import PropTypes from 'prop-types';
import { ReactComponent as Search } from '../../icons/search.svg';
import style from './SearchForm.module.css';
//import { useState } from "react";

const SearchForm = ({ onSubmitForm }) => {


  // const [searchInput, setSearchInput] = useState('');

  // const onDataChange = event => {
  //   setSearchInput(event.currentTarget.value.toLowerCase());
  // };

  // const onFormSubmit = event => {
  //   event.preventDefault();
  //   if (searchInput.trim() === '') {
  //     return;
  //   }
  //   onSubmitForm(searchInput);
  // };


  return (
    <form className={style.SearchForm} onSubmit={onSubmitForm}>
      <button type="submit" className={style.SearchFormButton}>
        <Search width="20" />
      </button>

      <input
        className={style.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name='searchfield'
      // onChange={event => onChange(event.target.value)}
      // value={value}
      // onChange={onDataChange}

      />
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func,
};

import PropTypes from 'prop-types';
import { ReactComponent as Search } from '../../icons/search.svg';
import style from './SearchForm.module.css';


const SearchForm = ({ onSubmitForm }) => {

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
      />
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

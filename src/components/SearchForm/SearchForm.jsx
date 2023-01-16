import PropTypes from 'prop-types';
import { ReactComponent as Search } from '../../icons/search.svg';
import style from './SearchForm.module.css';

const SearchForm = ({ onChange, value }) => {
  return (
    <form className={style.SearchForm}>
      <button type="submit" className={style.SearchFormButton}>
        <Search width="20" />
      </button>

      <input
        className={style.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        value={value}
        placeholder="Search moviess"
        onChange={event => onChange(event.target.value)}
      />
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func,
};

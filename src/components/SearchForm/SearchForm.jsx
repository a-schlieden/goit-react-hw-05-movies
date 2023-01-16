
import PropTypes from 'prop-types';
import style from './MovieMainInfo.module.css';

const SearchForm = ({ film }) => {

    return (
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
    )
}

export default MovieMainInfo


SearchForm.propTypes = {
    onSubmitForm: PropTypes.func,
};
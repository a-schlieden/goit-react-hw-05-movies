import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const FilmsList = ({ filmsArray, sublink }) => {
  const location = useLocation();
  // const [searchInput, setSearchInput] = useState('');
  // const [films, setFilms] = useState([]);
  // const [SearchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      {filmsArray.length > 0 && (
        <ul>
          {filmsArray.map(film => (
            <li key={film.id}>
              <Link
                to={`${sublink ? sublink + film.id : film.id}`}
                state={{ from: location }}
              >
                {film.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilmsList;

FilmsList.propTypes = {
  onSubmitForm: PropTypes.func,
};

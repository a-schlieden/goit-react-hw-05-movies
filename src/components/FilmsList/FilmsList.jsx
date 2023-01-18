import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const FilmsList = ({ filmsArray, sublink }) => {
  const location = useLocation();

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
  filmsArray: PropTypes.array.isRequired,
  sublink: PropTypes.string,
};

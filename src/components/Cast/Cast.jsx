import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import * as filmsFetch from '../../api/Fetch';
import noPosterCUT from '../../images/no-img.png';
import style from './Cast.module.css';

const Cast = () => {
  const [Cast, setCast] = useState([]);
  const [status, setStatus] = useState('idleNothing');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pendingLoad');

    filmsFetch.fetchCastMovie(movieId).then(movie => {
      if (movie.cast.length > 0) {
        setCast(movie.cast);
        setStatus('resolved');
      }
      else {
        return setStatus('noInfo');
      }
    });
  }, [movieId]);

  return (
    <div>
      {status === 'resolved' && (
        <ul>
          {Cast.map(item => {
            return (
              <li key={item.id}>
                <img
                  className={style.imageCast}
                  src={
                    item.profile_path
                      ? filmsFetch.IMG_URL + item.profile_path
                      : noPosterCUT
                  }
                  alt="Foto"
                />
                <p>Name: {item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {status === 'noInfo' && (<p>Sorry No Info Cast</p>)}
      {status === 'pendingLoad' && <Loader />}
    </div>
  );
};

export default Cast;

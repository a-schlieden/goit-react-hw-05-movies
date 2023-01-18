
import PropTypes from 'prop-types';
import * as filmsFetch from '../../api/Fetch';
import * as DataNormalize from '../../ulitits/DataNormalize';
import noPosterCUT from '../../images/no-img.png';
import style from './MovieMainInfo.module.css';

const MovieMainInfo = ({ film }) => {

    return (
        <div className={style.infoWrap}>
            <div className={style.imageWrap}>
                <img src={film.poster_path ? filmsFetch.IMG_URL + film.poster_path : noPosterCUT} alt="Foto" />
            </div>
            <div >
                <div className={style.title}>
                    <p>{film.title}</p>
                    <p> ({DataNormalize.NormalizeYear(film.release_date)})</p>
                </div>
                <div className={style.score}>
                    <p>User Score: </p>
                    <p> {DataNormalize.NormalizeScore(film.vote_average)} %</p>
                </div>

                <h4>Overview</h4>
                <p>{film.overview}</p>
                <h4>Gernes</h4>
                <ul>
                    {film.genres.map(genre => {
                        return <li key={genre.id}>{genre.name}</li>;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default MovieMainInfo


MovieMainInfo.propTypes = {
    film: PropTypes.object.isRequired,
};
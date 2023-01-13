
import PropTypes from 'prop-types';
// import style from './MovieMainInfo.module.css';

const MovieMainInfo = ({ film }) => {

    return (
        <>

            <img src={film.backdrop_path} alt="" />
            <h6>Title</h6>
            <p>{film.title}</p>
            <p>{film.release_date}</p>
            <h6>User Score</h6>
            <p>{film.vote_average} %</p>
            <h6>overview</h6>
            <p>{film.overview}</p>
            <h6>Gernes</h6>
            <ul>
                {film.genres.map(genre => {
                    return <li key={genre.id}>{genre.name}</li>;
                })}
            </ul>
        </>
    )
}

export default MovieMainInfo


MovieMainInfo.propTypes = {
    onSubmitForm: PropTypes.func,
};
import { useState, useEffect, Suspense } from "react";
import { useParams, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';
// import style from './MovieDetails.module.css';
import * as filmsFetch from '../../api/Fetch';
import MovieMainInfo from "components/MovieMainInfo/MovieMainInfo";
import AdditionalLinks from "components/AdditionalLinks/AdditionalLinks";
import BackLink from "components/BackLink/BackLink";
// import * as filmsFetch from '../../api/FilmsApi';


const MovieDetails = () => {
    const [FilmDetails, setFilmDetails] = useState([]);
    const [status, setStatus] = useState('idleNothing');
    const { movieId } = useParams()

    useEffect(() => {

        setStatus('pendingLoad');

        filmsFetch.fetchMoviesById(movieId).then(movie => {
            setFilmDetails(movie)
            setStatus('resolved');
        });
    }, [movieId]);




    return (
        <div>

            {status === 'pendingLoad' && <h2>LOAD.....</h2>}

            {status === 'resolved' &&
                <>
                    <BackLink />

                    <MovieMainInfo film={FilmDetails} />

                    <AdditionalLinks />
                </>
            }

            <Suspense fallback={<h2>LOAD...MORE..</h2>}>
                <Outlet />
            </Suspense>

        </div>
    )
}

export default MovieDetails


MovieDetails.propTypes = {
    onSubmitForm: PropTypes.func,
};
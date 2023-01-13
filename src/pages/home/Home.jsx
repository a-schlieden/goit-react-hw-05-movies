import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

import * as filmsFetch from '../../api/Fetch';
// import * as filmsFetch from '../../api/FilmsApi';

const Home = () => {

    const [films, setFilms] = useState([]);


    // useEffect(() => {
    //     filmsFetch.default
    //         .fetchMoviesTrend()
    //         .then(movies => {
    //             setFilms(movies)
    //         })
    //         .catch(errorFetch => {
    //             console.log(errorFetch)
    //         });

    // }, [])


    useEffect(() => {
        filmsFetch.fetchTrendingMovies().then(result => { setFilms(result.results) });
    }, []);




    return (
        <>
            {/* {films && ( */}
            <ul>
                {films.map(film => (
                    <li key={film.id}>
                        <Link to={`movies/${film.id}`}>{film.original_title}</Link>
                        {/* <p>{film.id}</p> */}
                    </li>
                ))}
            </ul>
            {/* // )} */}
        </>
    )
}

export default Home
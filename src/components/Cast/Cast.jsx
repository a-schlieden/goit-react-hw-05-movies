// import { NavLink } from "react-router-dom";
// import style from './Header.module.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as filmsFetch from '../../api/Fetch';

const Cast = () => {

    // const [FilmDetails, setFilmDetails] = useState([]);
    // const [status, setStatus] = useState('idleNothing');
    const { movieId } = useParams()

    useEffect(() => {



        filmsFetch.fetchCastMovie(movieId).then(movie => {
            console.log(movie)
        });
    }, [movieId]);




    return (

        <div>Cast Texte
            <img src="" alt="Foto" />
            <p>Name</p>
            <p>Character:</p>

        </div>

    )
}

export default Cast
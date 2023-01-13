// import { NavLink } from "react-router-dom";
// import style from './Header.module.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as filmsFetch from '../../api/Fetch';


const Reviews = () => {

    const [Reviews, setReviews] = useState([]);
    const [status, setStatus] = useState('idleNothing');
    const { movieId } = useParams()

    useEffect(() => {
        setStatus('pendingLoad');

        filmsFetch.fetchReviewMovie(movieId).then(movie => {
            if (movie.results.length > 0) {
                console.log(movie)
                setReviews(movie.results)
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
                    {Reviews.map(review => {
                        return <li key={review.id}>
                            <p>Autor: {review.author}</p>
                            <p>Autor: {review.content}</p>
                        </li>;
                    })}
                </ul>
            )}
            {status === 'noInfo' && (<p>No Info Reviews !!!!</p>)}
            {status === 'pendingLoad' && (<p>LOADDDD:::::::</p>)}



            {/* {Reviews.length > 0 ? (
                <ul>
                    {Reviews.map(review => {
                        return <li key={review.id}>
                            <p>Autor: {review.author}</p>
                            <p>Autor: {review.content}</p>
                        </li>;
                    })}
                </ul>
            ) : (<p>No Info Reviews !!!!</p>)} */}

        </div>

    )
}

export default Reviews

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from 'components/Loader/Loader';
import * as filmsFetch from '../../api/Fetch';


const Reviews = () => {

    const [Reviews, setReviews] = useState([]);
    const [status, setStatus] = useState('idleNothing');
    const { movieId } = useParams()

    useEffect(() => {
        setStatus('pendingLoad');

        filmsFetch.fetchReviewMovie(movieId).then(movie => {
            if (movie.results.length > 0) {
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
                            <p><b>Autor: {review.author}</b></p>
                            <p>{review.content}</p>
                        </li>;
                    })}
                </ul>
            )}

            {status === 'noInfo' && (<p>No Info Reviews !!!!</p>)}

            {status === 'pendingLoad' && <Loader />}

        </div>

    )
}

export default Reviews
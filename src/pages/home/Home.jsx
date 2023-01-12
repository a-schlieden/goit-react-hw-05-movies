import { useEffect, useState } from "react"
import fetchTrend from '../../api/FilmsApi';

const Home = () => {

    const [film, setFilm] = useState([]);

    useEffect(() => {
        fetchTrend
            .fetchMoviesTrend()
            .then(imagesFromBack => {
                // if (imagesFromBack.hits.length > 0) {
                //    setImages((prevState) => [...prevState, ...imagesFromBack.hits]);
                //    setStatus('resolved');
                // } else {
                //    return setStatus('noImg');
                // }
                console.log('imagesFromBack ', imagesFromBack.results)
            })
            .catch(errorFetch => {
                // setError(errorFetch);
                // setStatus('rejecktedError');
            });

    }, [])
    return (
        <div>
            <p>sfsgdgdg</p>
        </div>
    )
}

export default Home
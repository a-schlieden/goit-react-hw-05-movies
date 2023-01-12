const KEY = '0e67fb79d752f59394a3aa358d9abf8d';
const SRC = 'https://api.themoviedb.org/3/';

function fetchMoviesTrend() {

    return fetch(`${SRC}trending/all/day?api_key=${KEY}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error(`No img with querry `));
        })
    // .then((responce) => responce.film)
};

const api = {
    fetchMoviesTrend,
};

export default api;
const KEY = '0e67fb79d752f59394a3aa358d9abf8d';
export const URL = 'https://api.themoviedb.org/3/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '') {
    const response = await fetch(url);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}



export function fetchTrendingMovies() {
    return fetchWithErrorHandling(`${URL}trending/movie/week?api_key=${KEY}`);
}

export function fetchSearchMovies(querry) {
    return fetchWithErrorHandling(`${URL}search/movie?api_key=${KEY}&language=en-US&query=${querry}&include_adult=false`);
}

export function fetchMoviesById(FilmId) {
    return fetchWithErrorHandling(`${URL}movie/${FilmId}?api_key=${KEY}&language=en-US`);
}


export function fetchCastMovie(FilmId) {
    return fetchWithErrorHandling(`${URL}movie/${FilmId}/credits?api_key=${KEY}&language=en-US`);
}


export function fetchReviewMovie(FilmId) {
    return fetchWithErrorHandling(`${URL}movie/${FilmId}/reviews?api_key=${KEY}&language=en-US`);
}
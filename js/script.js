import { fetchMovie } from '../modules/fetchMovies.js';
import { searchMovie } from '../modules/searchMovies.js';

const local_movie_url = 'http://localhost:3000/movies';
const local_search_url = 'http://localhost:3000/search';

fetchMovie(local_movie_url);
searchMovie(local_search_url);
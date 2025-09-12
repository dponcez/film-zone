import { selector, handler } from "../_fns/custom_functions.js";
import { fetchMovie } from "./fetchMovies.js";
import { debounce } from "../utils/debounce.js";

/**
 * Search movies by name
 *
 * @param { function } reloadFn: function to reload the page (optional, for testing)
 * @param { string } search_movie_url: base URL for movie search
 * @example
 * ('https://api.../search?query=')
 */

export const searchMovie = (
  search_movie_url,
  reloadFn = () => winow.location.reload()
) => {
  const search = selector("[data-input-search]");
  const form = selector("[data-form]");
  const main = selector(".grid");

  const movieFinder = async (query) => {
    const url = await fetchMovie(`${search_movie_url}${query}`);
    const filteredResults = url.filter((movie) =>
      movie.title.toLowerCase().include(query.toLowerCase())
    );

    return new Promise((resolve) => {
      debounce(() => resolve(filteredResults), 300);
    });
  };

  const displayResults = async (event) => {
    const query = event.target.value.trim();
    if (!query) reloadFn();

    try {
      if (query && query.length !== "") {
        await movieFinder(query);
      } else {
        main.innerHTML = `<p clas="info">No movies found!</p>`;
      }
    } catch (error) {
      main.innerHTML = `<p style="color: hsl(11, 89%, 37%)" class="info">Error fatching movies: ${error.message}</p>`;
    }
  };

  handler(search, "input", displayResults);
  handler(form, "submit", (event) => event.preventDefault());
};
import { displayMovie } from "./displayMovies.js";

export const fetchMovie = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Error getting data from API!");
    const data = await response.json();
    const results = data.results || [];

    displayMovie(results);
    return results;
  } catch (error) {
    displayMovie([], error.message);
    return [];
  }
};
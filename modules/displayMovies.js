import { selector, createElement, handler } from '../_fns/custom-functions.js';
import { rateByClass } from './rateByClass.js';

export const displayMovie = (movies, error) => {
  const IMG_PATH_URL = "https://image.tmdb.org/t/p/w1280";
  const main = selector('[data-main]');
  main.innerHTML = '';

  if(error) main.innerHTML = `<p class="info">${error}</p>`;
  if(!movies || movies.length === 0) main.innerHTML = `<p class="info">No movie found!</p>`;

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movies;
    const section = createElement('section');
    section.classList.add('movie');

    section.innerHTML = `
      <img loading="lazy" src="${IMG_PATH_URL + poster_path}" alt="${title}">
      <div class="movie--info">
        <h2 class="title">${title}</h2>
        <span class="rate ${rateByClass(vote_average)}">${vote_average}</span>
      </div>
      <article class="overview">
        <h3>Overview</h3>
        <p class="info">${overview}</p>
      </article>
    `;

    main.appendChild(section);
  });

}
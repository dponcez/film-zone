import { rateByClass } from './rateByClass.js';
import { smoothScrollAnimation } from './scrollAnimation.js';
import { selector, createElement, handler } from '../_fns/custom_functions.js';

export const displayMovie = (movies, error) => {
  const IMG_PATH_URL = "https://image.tmdb.org/t/p/w1280";
  const main = selector('.grid');
  main.innerHTML = '';

  if(error){
    main.innerHTML = `<p style="color: hsl(11, 89%, 37%)">${error}</p>`
  }

  if(!movies || movies.length === 0){
    main.innerHTML = `<p>No movies found</p>`
  }

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;

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

  handler(document, 'DOMContentLoaded', smoothScrollAnimation('.movie'));
}
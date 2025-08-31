import { selector, selectorAll, handler } from '../_fns/custom-functions.js';

export const smoothScrollAnimation = (className) => {
  const header = selector('.header');
  const movies = selectorAll(className);

  handler(movies, 'scroll', () => {
    if(movies.length > 0){
      const movie = movies[0];
      const rect = movie.getBoundingClientRect();
      const innerHeight = window.innerHeight / 6;
  
      // Check if the first movie item is in the viewport
      if(rect.top < innerHeight){
        header.classList.add('visible')
      }else{
        header.classList.remove('visible')
      }
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible')
      }else{
        entry.target.classList.remove('visible')
      }
    })
  }, { threshold: 0.15 });

  movies.forEach(movie => observer.observe(movie));
}
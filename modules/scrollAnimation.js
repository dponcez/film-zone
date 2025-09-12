import { selector, handler } from "../_fns/custom_functions.js";

export const smoothScrollAnimation = (className) => {
  const movies = document.querySelectorAll(className);
  const header = selector(".header");

  handler(window, "scroll", () => {
    if (movies.length > 0) {
      const movie = movies[0];
      const rect = movie.getBoundingClientRect();
      const innerHeight = window.innerHeight / 6;

      // Check if the first movie is in the viewport
      const viewport =
        rect.top < innerHeight
          ? header.classList.add("visible")
          : header.classList.remove("visible");

      return viewport;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  movies.forEach((movie) => observer.observe(movie));
}
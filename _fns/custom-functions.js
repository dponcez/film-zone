export const selector = (element) => document.querySelector(element);
export const selectorAll = (element) => document.querySelectorAll(element);
export const createElement = (element) => document.createElement(element);
export const handler = ($, event, callback) => $.addEventListener(event, callback);
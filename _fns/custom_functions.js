export const selector = (element) => document.querySelector(element);
export const selectorAll = (element) => document.querySelectorAll(element);
export const handler = ($, event, callback) => $.addEventListener(event, callback);
export const createElement = (element) => document.createElement(element);
export const createSVGElement = (url, element) => document.createElementNS(url, element)
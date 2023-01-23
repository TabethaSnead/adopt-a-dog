import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', () => {
    getDogs();
});
// fetch all dogs
// render and append all dog cards to the container

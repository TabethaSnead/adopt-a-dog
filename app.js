import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

let allDogs = [];

// on load
window.addEventListener('load', async () => {
    const dogs = await getDogs();
    // const addedDog = renderDogCard(dog);
    allDogs = dogs;
    console.log(allDogs);
    // dogListContainer.append(allDogs);
    displayAllDogs();
});
// fetch all dogs
// render and append all dog cards to the container
async function displayAllDogs(dog) {
    dogListContainer.textContent = '';
    for (let dog of allDogs) {
        const dogCard = renderDogCard(dog);
        dogListContainer.append(dogCard);
    }
}

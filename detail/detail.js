import { getDog, getDogs } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');
    const dog = await getDog(id);
    const dogDetail = renderDogDetail(dog[0]);

    dogDetailContainer.append(dogDetail);
});
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container

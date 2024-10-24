import { fetchDogImage } from './API.js';

const dogImageElement = document.getElementById('dog-image');
const newDogButton = document.getElementById('new-dog-btn');

const loadDogImage = async () => {
    console.log("Loading new dog image...");
    try {
        const imageUrl = await fetchDogImage();
        dogImageElement.src = imageUrl;
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
};
newDogButton.addEventListener('click', loadDogImage);
window.onload = loadDogImage;
export const fetchDogImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.message;
};
console.log("script.js loaded");

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=AaPLSv6hXGzEKNA3t6McKw9aDYeTkNtV&q=q&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");

async function getGifs() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const images = data.data.map(gif => gif.images.original.url);

    console.log(images);

    for (let image of images) {
        gifContainer.innerHTML += `<img src="${image}" class="col-3 mb-3">`;
    }
}

button.addEventListener("click", function () {
    getGifs();
});
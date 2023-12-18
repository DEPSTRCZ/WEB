// main.js
import randomMemes from 'https://cdn.jsdelivr.net/npm/random-memes@3.1.7/+esm';

async function append(source) {
    var newImage = document.createElement("img");
    newImage.src = source;

    // Append the new image to a class
    var classElement = document.querySelector(".view-grid");
    classElement.appendChild(newImage);
}

async function getMemes() {
    try {
        randomMemes.fromReddit("en");
        console.log(meme);
        console.log(meme.image);
        append(meme.image);
    } catch (error) {
        console.error("Error fetching memes:", error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Call the getMemes function
    getMemes();
});

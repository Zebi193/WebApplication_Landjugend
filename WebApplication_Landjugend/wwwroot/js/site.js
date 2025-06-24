// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const images = [
    "/images/Fronleichnam2025/fronleichnam2025_1.jpg",
    "/images/Fronleichnam2025/fronleichnam2025_2.jpg",
    "/images/Fronleichnam2025/fronleichnam2025_3.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[currentIndex];
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex];
}
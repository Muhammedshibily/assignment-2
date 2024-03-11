document.addEventListener("DOMContentLoaded", function () {
    var figure = document.querySelector("#gallery figure");
    var figcaption = document.querySelector("#gallery figure figcaption");


    var thumbnails = document.querySelectorAll("#gallery ul li img");
    var fullImages = [
        "flowers-pink-large.jpg",
        "flowers-purple-large.jpg",
        "flowers-red-large.jpg",
        "flowers-white-large.jpg",
        "flowers-yellow-large.jpg"
    ];

    var thumbnailsImages = [
        "flowers-pink-small.jpg",
        "flowers-purple-small.jpg",
        "flowers-red-small.jpg",
        "flowers-white-small.jpg",
        "flowers-yellow-small.jpg"
    ];

    
    thumbnails.forEach(function (thumbnail, index) {
        thumbnail.addEventListener("click", function () {
            figure.querySelector("img").src = "images/" + fullImages[index];
            figure.querySelector("img").alt = thumbnails[index].alt;
            figcaption.textContent = thumbnail.alt;
            thumbnails.forEach(function (thumb) {
                thumb.parentNode.classList.remove("active");
            });
            thumbnail.parentNode.classList.add("active");
        });
    });
});

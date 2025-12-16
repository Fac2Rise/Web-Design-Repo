let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}

showSlides ();

document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progress-bar");
    const increaseButton = document.getElementById("increase-progress");
    const resetButton = document.getElementById("reset-progress");

    let progress = 0;

    increaseButton.addEventListener("click", function () {
        if (progress < 100) {
            progress += 10;
            progressBar.style.width = progress + "%";
        } else {
            alert("This progress is complete.");
        }
    });

    resetButton.addEventListener("click", function() {
        if(progress < 100){
            alert("This progress is not completed!");
        } else {
            progress = 0;
            progressBar.style.width = progress + "%";
        }
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const collapsibleButton = document.querySelector
    (".collapsible");
    const content = document.querySelector(".collapsible-content");
    
    collapsibleButton.addEventListener("click", function () {
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
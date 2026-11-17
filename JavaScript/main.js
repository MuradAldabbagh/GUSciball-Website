const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".slide-button.prev");
const nextButton = document.querySelector(".slide-button.next");

let currentSlide = 0;

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}

if (slides.length > 0) {

    nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    prevButton.addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            showSlide(i);
        });
    });

}
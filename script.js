const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const slides = document.querySelectorAll(".slide");
const slideDots = document.querySelectorAll(".slide-dot");
const numberOfSlides = slides.length;
var indexSlides = 1;
showSlides(indexSlides);
//image slider next btn
nextBtn.addEventListener('click', function() {
    showSlides(indexSlides += 1);
})

//image slider preve btn
prevBtn.addEventListener('click', function() {
        showSlides(indexSlides -= 1);
    })
    //0 1 2 3     length = 4
    // index           n
    // 1        - 0 active 
    // 2       - 1 active click
    // 3        - 2 active click
    // 4        - 3 active clicks
function showSlides(n) {
    for (let i = 0; i < numberOfSlides; i++) {
        slides[i].classList.remove("active");
    }
    for (let j = 0; j < slideDots.length; j++) {
        slideDots[j].classList.remove("active");
    }
    if (n > numberOfSlides) {
        indexSlides = 1;
    }
    if (n < 1) {
        indexSlides = numberOfSlides;
    }
    slides[indexSlides - 1].classList.add("active");
    slideDots[indexSlides - 1].classList.add("active");
}


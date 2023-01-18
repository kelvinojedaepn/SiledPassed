const slideElement = ["diapositivas/Diapositiva1.png", "diapositivas/Diapositiva2.png", "diapositivas/Diapositiva3.png"];
const totalSlide = document.querySelector("#totalSlides");
totalSlide.textContent = slideElement.length + '';
const btnBack = document.querySelector("#btnBack");
const imgSlide = document.querySelector(".slide-img");
const listSideBarSelectorArray = document.querySelectorAll("#lista ul li");
const hamburguesa = document.querySelector(".toggle-btn");
const btnNext = document.querySelector("#btnNext");

var i = 0;
var numberCurrentSlide = 1;

btnBack.disabled = true;
imgSlide.setAttribute("src", slideElement[numberCurrentSlide - 1]);

btnBack.addEventListener('click', function() {
    const currentSlide = document.querySelector("#currentSlide").textContent;
    numberCurrentSlide = parseInt(currentSlide);
    if (numberCurrentSlide != 1) {
        numberCurrentSlide--;
        document.querySelector("#currentSlide").textContent = numberCurrentSlide;
        btnNext.disabled = false;
        imgSlide.setAttribute("src", slideElement[numberCurrentSlide - 1]);
        if (numberCurrentSlide == 1) {
            btnBack.disabled = true;
        }
    } else {
        btnBack.disabled = true;
    }
})

btnNext.addEventListener('click', function() {
    var numbertotalSlide = slideElement.length;
    const currentSlide = document.querySelector("#currentSlide").textContent;
    numberCurrentSlide = parseInt(currentSlide);
    if (numberCurrentSlide != numbertotalSlide) {
        numberCurrentSlide++;
        document.querySelector("#currentSlide").textContent = numberCurrentSlide;
        btnBack.disabled = false;
        imgSlide.setAttribute("src", slideElement[numberCurrentSlide - 1]);
        if (numberCurrentSlide == numbertotalSlide) {
            btnNext.disabled = true;
        }
    } else {
        btnNext.disabled = true;
    }
})

hamburguesa.addEventListener("click", () => document.querySelector("#lista").classList.toggle("active"));
listSideBarSelectorArray.forEach((element, indice) => {
    element.addEventListener("click", function() {
        i = indice;
        imgSlide.setAttribute("src", slideElement[i]);
        document.querySelector("#currentSlide").textContent = i + 1;
        if (i + 1 == 1) {
            btnBack.disabled = true;
            btnNext.disabled = false;
        }
        if (i + 1 == slideElement.length) {
            btnBack.disabled = false;
            btnNext.disabled = true;
        }
        if (i + 1 != 1 && i + 1 != slideElement.length) {
            btnBack.disabled = false;
            btnNext.disabled = false;
        }

    })
});
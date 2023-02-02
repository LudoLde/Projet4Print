const slides = [
   {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
   },
   {
      image: "slide2.jpg",
      tagLine:
         "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
   },
   {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
   },
   {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
   },
];
const prev = document.querySelector(".arrow_left");
const next = document.querySelector(".arrow_right");
const textP = document.querySelector("#banner p");
const imgCaroussel = document.getElementById("img-caroussel");
let count = 0;
const nbImages = slides.length;
const pointImg1 = document.querySelector(".dots :nth-child(1)");
const pointImg2 = document.querySelector(".dots :nth-child(2)");
const pointImg3 = document.querySelector(".dots :nth-child(3)");
const pointImg4 = document.querySelector(".dots :nth-child(4)");

function nextSlides() {
   let childNum = count + 1;

   document
      .querySelector(".dots :nth-child(" + childNum + ")")
      .classList.remove("dot_selected");
   if (count < nbImages - 1) {
      count++;
   } else {
      count = 0;
   }
   childNum = count + 1;
   document
      .querySelector(".dots :nth-child(" + childNum + ")")
      .classList.add("dot_selected");
   imgCaroussel.src = "./assets/images/slideshow/" + slides[count].image;
   textP.innerHTML = slides[count].tagLine;
}
function prevSlides() {
   let childNum = count + 1;

   document
      .querySelector(".dots :nth-child(" + childNum + ")")
      .classList.remove("dot_selected");
   if (count > 0) {
      count--;
   } else {
      count = 3;
   }
   childNum = count + 1;
   document
      .querySelector(".dots :nth-child(" + childNum + ")")
      .classList.add("dot_selected");
   imgCaroussel.src = "./assets/images/slideshow/" + slides[count].image;
   textP.innerHTML = slides[count].tagLine;
}
function selectSlide(numSlide) {
   let childNum = count + 1;

   document
      .querySelector(".dots :nth-child(" + childNum + ")")
      .classList.remove("dot_selected");
   count = numSlide;

   childNum = count + 1;
   document
      .querySelector(".dots :nth-child(" + childNum + ")")
      .classList.add("dot_selected");
   imgCaroussel.src = "./assets/images/slideshow/" + slides[count].image;
   textP.innerHTML = slides[count].tagLine;
}

next.addEventListener("click", nextSlides);
prev.addEventListener("click", prevSlides);

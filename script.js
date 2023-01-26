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

let i = 0;
const arrowLeft = document.getElementsByClassName("arrow_left");
console.log(arrowLeft[0]);
arrowLeft[0].addEventListener("click", function () {
  console.log(i--);
});

function moins() {
  if (i < 0) {
    i = 3;
  } else {
    i = i--;
  }
  document.getElementById("img-caroussel").src =
    "./assets/images/slideshow/" + slides[i].image;
  console.log(slides[i]);
}

function plus() {
  if (i > 3) {
    i = 0;
  } else {
    i = i++;
  }
  document.getElementById("img-caroussel").src =
    "./assets/images/slideshow/" + slides[i].image;
  console.log(slides[i]);
}

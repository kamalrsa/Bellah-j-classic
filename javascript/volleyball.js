//nav mobile version

const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");
mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});
mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

var slider_content = document.getElementById("box");

// contain images in an array
var image = [
  "images/volleyball/a",
  "images/volleyball/b",
  "images/volleyball/c",
  "images/volleyball/d",
  "images/volleyball/e",
  "images/volleyball/f",
  "images/volleyball/g",
  "images/volleyball/h",
  "images/volleyball/i",
  "images/volleyball/j",
  "images/volleyball/k",
  "images/volleyball/l",
  "images/volleyball/m",
  "images/volleyball/n",
  "images/volleyball/o",
  "images/volleyball/p",
  "images/volleyball/q",
  "images/volleyball/r",
  "images/volleyball/s",
];

var i = image.length;

// function for next slide

function nextImage() {
  if (i < image.length) {
    i = i + 1;
  } else {
    i = 1;
  }
  slider_content.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
}

// function for prew slide

function prewImage() {
  if (i < image.length + 1 && i > 1) {
    i = i - 1;
  } else {
    i = image.length;
  }
  slider_content.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
}

// script for auto image slider

setInterval(nextImage, 4000);

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
  "images/Football/g",
  "images/Football/b",
  "images/Football/c",
  "images/Football/d",
  "images/Football/e",
  "images/Football/f",
  "images/Football/a",
  "images/Football/h",
  "images/Football/i",
  "images/Football/j",
  "images/Football/k",
  "images/Football/l",
  "images/Football/m",
  "images/Football/n",
  "images/Football/o",
  "images/Football/p",
  "images/Football/q",
  "images/Football/r",
  "images/Football/s",
  "images/Football/t",
  "images/Football/u",
  "images/Football/v",
  "images/Football/w",
  "images/Football/x",
  "images/Football/y",
  "images/Football/z",
  "images/Football/z1",
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

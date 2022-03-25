"use strict";

// title typing effect
const titleText = document.querySelector("h1.title");
let i = 0;
let txt = "Hello, I'm seulbi !";
let speed = 90;

function typeWriter() {
  if (i < txt.length) {
    titleText.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// likes_title scroll e
const likesTitleContainer = document.querySelectorAll(".like_title div");
const likesTitleArray = Array.from(likesTitleContainer);

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  likesTitleArray.map((i) => {
    if (value > 1100) {
      i.style.animation = "up .6s ease-out forwards";
    } else {
      i.style.animation = "down 1s ease-out ";
    }
  });
});

// promise_container scroll e
const promiseContainer = document.querySelector(".promise_container");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  if (value > 1700) {
    promiseContainer.style.animation = "appear 1s ease-out forwards";
  } else {
    promiseContainer.style.animation = "disappear 1s ease-out";
  }
});

// navbar scrollhandling
const nav = document.querySelector(".navbar_container");

nav.addEventListener("click", (e) => {
  const target = e.target;
  const li = target.dataset.li;
  if (target.tagName !== "LI") return;
  scrollF(li);
});

function scrollF(selector) {
  const scrollSec = document.querySelector(selector);
  const scrollY = scrollSec.offsetTop;
  window.scrollTo({ top: scrollY, behavior: "smooth" });
}

// navbar color change
const navLis = document.querySelectorAll(".navbar_container .navMenu");
const navLisArray = Array.from(navLis);
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  navLisArray.map((li) => {
    if (value > 200) {
      li.classList.add("dark");
    } else {
      li.classList.remove("dark");
    }
  });
});

// Set Variables
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");
const checkbox = document.getElementById("checkbox");
const ball = document.getElementById("ball");

// Auto Height
navToggle.addEventListener("click", () => {
  // links.classList.toggle("show-links");
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  console.log(linksHeight);
});

// Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Dark Mode
checkbox.addEventListener("change", () => {
  let getDarkMode = localStorage.getItem("dark");
  if (getDarkMode !== "on") {
    document.getElementById("logo").src = "/img/logo_light.png";
    document.body.classList.add("dark");
    ball.classList.add("roll");
    localStorage.setItem("dark", "on");
  } else {
    document.getElementById("logo").src = "/img/logo.png";
    document.body.classList.remove("dark");
    ball.classList.remove("roll");
    localStorage.removeItem("dark");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("test");
  let getDarkMode = localStorage.getItem("dark");
  if (getDarkMode === "on") {
    document.getElementById("logo").src = "/img/logo_light.png";
    document.body.classList.add("dark");
    ball.classList.add("roll");
  }
});

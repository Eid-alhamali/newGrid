// Set Variables
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");

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

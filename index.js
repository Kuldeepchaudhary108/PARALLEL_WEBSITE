let names = ["Welcome to my Restaurant", "Hello Everyone!"];

const exploreBtn = document.getElementById("Explor_btn");
const heroHeading = document.getElementById("hero-heading");

exploreBtn.addEventListener("click", function () {
  heroHeading.innerText = names[1];
});
// index.js
document.addEventListener("DOMContentLoaded", () => {
  const barIcon = document.querySelector(".bar_icon");
  const nav = document.querySelector("nav");

  barIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
// index.js
document.querySelector(".explore_btn").addEventListener("mouseenter", (e) => {
  e.target.style.backgroundColor = "#f39c12"; // Change to a different color
  e.target.style.transform = "scale(1.05)";
});

document.querySelector(".explore_btn").addEventListener("mouseleave", (e) => {
  e.target.style.backgroundColor = ""; // Reset to original color
  e.target.style.transform = "scale(1)";
});
// index.js
const gridImages = document.querySelectorAll(".grid_image");

gridImages.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.3s ease";
  });

  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
});

// index.js
// document.addEventListener("DOMContentLoaded", () => {
//   const scrollToTopBtn = document.getElementById("scrollToTop");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 300) {
//       scrollToTopBtn.style.display = "block";
//     } else {
//       scrollToTopBtn.style.display = "none";
//     }
//   });

//   scrollToTopBtn.addEventListener("click", () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   });
// });
// index.js
document.querySelectorAll(".grid_image").forEach((image) => {
  image.addEventListener("click", () => {
    document.getElementById("myModal").style.display = "block";
  });
});

document.querySelector(".modal .close").addEventListener("click", () => {
  document.getElementById("myModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
});
// index.js
document.querySelectorAll(".feature").forEach((feature) => {
  feature.addEventListener("click", () => {
    feature.classList.toggle("highlight");
  });
});

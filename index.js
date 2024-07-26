let names = ["Welcome to my Restaurant", "Hello Everyone!"]

const exploreBtn = document.getElementById("Explor_btn")
const heroHeading = document.getElementById("hero-heading")

exploreBtn.addEventListener("click", function () {
    heroHeading.innerText = names[1]
})
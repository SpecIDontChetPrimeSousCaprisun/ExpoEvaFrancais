const dropButton = document.getElementById("dropButton")
const bg = document.getElementById("bg")

dropButton.addEventListener("click", () => {
    bg.style.animationName = "fadeIn"
})

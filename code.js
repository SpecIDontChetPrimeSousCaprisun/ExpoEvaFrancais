const dropButton = document.getElementById("dropButton")
const bg = document.getElementById("bg")
const content = document.getElementById("content")

dropButton.addEventListener("click", () => {
    bg.style.animationName = "fadeIn"
    content.style.animationName = "contentFade"
})

const dropButton = document.getElementById("dropButton")
const bg = document.getElementById("bg")
const content = document.getElementById("content")
const dropContent = document.getElementById("drop1")

dropButton.addEventListener("click", () => {
    bg.style.animationName = "fadeIn"
    content.style.animationName = "contentFade"
    dropContent.style.animationName = "fadeIn"
})

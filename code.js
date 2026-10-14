const gifAmnt = 4
const dropButton = document.getElementById("dropButton")
const drop2Button = document.getElementById("secondDropButton")
const bg = document.getElementById("bg")
const content = document.getElementById("content")
const dropContent = document.getElementById("drop1")
const drop2Content = document.getElementById("drop2")

dropButton.addEventListener("click", () => {
    bg.style.animationName = "fadeIn"
    content.style.animationName = "contentFade"
    dropContent.style.animationName = "fadeIn"
})

secondDropButton.addEventListener("click", () => {
    drop2Content.style.animationName = "fadeIn"
    setTimeout(spawnGif, 3000 + (Math.floor(Math.random() * 4) * 1000))
})

function spawnGif() {
    const gifName = Math.floor(Math.random() * gifAmnt) + 1
    
    let newGif = document.createElement("img")
    newGif.src = "gifs/" + gifName + ".gif"
    newGif.classList.add("gif")
    newGif.style.top = Math.floor(Math.random() * 76) + "%"
    newGif.style.left = Math.floor(Math.random() * 76) + "%"
    newGif.style.animationName = "fadeIn"
    document.body.appendChild(newGif)

    setTimeout(spawnGif, 3000 + (Math.floor(Math.random() * 4) * 1000))
}

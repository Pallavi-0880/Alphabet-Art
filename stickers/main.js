let decrement = document.getElementById("decrement")
let increment = document.getElementById("increment")
let quantityInput = document.querySelector(".quantity-input")
let proceedButton = document.querySelector(".pushable-button")

decrement.addEventListener("click", () => {
    quantityInput.stepUp(-1)
})
increment.addEventListener("click", () => {
    quantityInput.stepUp(1)

})
proceedButton.addEventListener("click", () => {
    const url = `http://127.0.0.1:5500/Alphabet-Art/stickers/buy.html?q=${quantityInput.value}`
    window.location.replace(url)
})

function myFunction(imge) {
    let changeImg = document.getElementById("images")
    changeImg.src = imge.src
}



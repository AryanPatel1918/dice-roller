const rollBtn = document.getElementById("roll-btn");

rollBtn.addEventListener("click", rollDice)

function rollDice() {
    const numOfDice = document.getElementById("dice-input").value
    const diceResult = document.getElementById("dice-result")
    const diceImages = document.getElementById("dice-images")

    if (isNaN(numOfDice) || numOfDice < 1) {
        diceResult.textContent = "Please enter a valid whole number of dice (1 or more)";
        diceImages.innerHTML = "";
        return;
    }

    const values = []
    const images = []

    for (let i = 0; i < numOfDice; i++) {
        const randValue = Math.floor(Math.random() * 6) + 1
        values.push(randValue)
        images.push(`<img src="./dice-images/dice-${randValue}.png" alt="Dice ${randValue}">`)
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join("")
}
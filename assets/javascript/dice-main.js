const dieRolls = []
const rollButton = document.querySelector("#roll-button")
const userInput = document.querySelector("#num-dice")
const showAllRollsButton = document.querySelector("#show-all-rolls-button")
const sumOfRolls = document.querySelector("#sum-of-rolls")
const total = document.querySelector("#total")
const rollsList = document.querySelector("#all-rolls-list")
let sum = 0



rollButton.addEventListener("click", function () {
    let userInputValue = userInput.value
    let index = 0
    while (index < userInputValue) {
        let theRoll = Math.floor(Math.random() * 6) + 1
        dieRolls.push(theRoll)
        total.innerHTML = sum += theRoll
        index += 1


    }

    console.log(dieRolls)

})

showAllRollsButton.addEventListener("click", function () {
    for (let index = 0; index < dieRolls.length; index += 1) {
        const newDiceString = '<li class = "all-rolls-list">' + dieRolls[index] + "</li>"
        rollsList.innerHTML += newDiceString

    }


})
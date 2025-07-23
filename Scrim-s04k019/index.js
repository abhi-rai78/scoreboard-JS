
//creating function for home-score

let count = 0

let homeScore = document.getElementById("home-score")
console.log(homeScore)

function add4() {
    count = count + 1
    homeScore.textContent = count
}

function add5() {
    count = count + 2
    homeScore.textContent = count
}

function add6() {
    count = count + 3
    homeScore.textContent = count
}

//creating function for guest-score

let count2 = 0

let guestScore = document.getElementById("guest-score") 
console.log(guestScore)

function add1() {
    count2 = count2 + 1
    guestScore.textContent = count2
}

function add2() {
    count2 = count2 + 2
    guestScore.textContent = count2
}

function add3() {
    count2 = count2 + 3
    guestScore.textContent = count2
}

//creating function for new-game

let newGameButton = document.getElementsByClassName("new-game-button")

function newGame() {
    count = 0;
    count2 = 0;
    homeScore.textContent = count;
    guestScore.textContent = count2;
}

var display = document.querySelectorAll(".handDisplay")
var Hands = document.querySelectorAll('.handButton')
var userInput = ""
var computerInput = 0
var guesses = ["rock", "paper", "scissors"]
var playerOneScore = 0
var playerTwoScore = 0
var roundCount = 1
var score1Tag = document.getElementById('player1Score')
var score2Tag = document.getElementById('player2Score')
var rounds = document.getElementById("roundCount")

function setRock(x){
    x.classList.remove("paper") 
    x.classList.remove("scissors") 
    x.classList.add("rock")    
}
function setPaper(x){
    x.classList.remove("rock") 
    x.classList.remove("scissors") 
    x.classList.add("paper")
}
function setScissors(x){
    x.classList.remove("paper") 
    x.classList.remove("rock") 
    x.classList.add("scissors") 
}
Hands[0].addEventListener("click", function(){
    setRock(display[0])
    userInput = 0
    round()
})
Hands[1].addEventListener("click", function(){
    setPaper(display[0])
    userInput = 1
    round()
})
Hands[2].addEventListener("click", function(){
    setScissors(display[0])
    userInput = 2
    round()
})
// generate a random Computer try
function computerIsGuessing(){
    var randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
        setRock(display[1])
        computerInput =  0
    }else if( randomNum === 1){
        setPaper(display[1])
        computerInput =  1
    }else{
        setScissors(display[1])
        computerInput =  2
    }  
    return computerInput  
}

function rockPaperScissors(x, y){
    if(x>y){
        return 1
    }else if(x<y){
        return 2
    }else{
        return 3
    }
}
function round(){

    computerIsGuessing()
    if (rockPaperScissors(userInput, computerInput) === 1){
        playerOneScore++
        score1Tag.textContent = playerOneScore
        roundCount++
        rounds.textContent = roundCount
    }else if(rockPaperScissors(userInput, computerInput) === 2){
        playerTwoScore++
        score2Tag.textContent = playerTwoScore
        roundCount++
        rounds.textContent = roundCount
    }else{
        score1Tag.classList.toggle("tie")
        score2Tag.classList.toggle("tie")
        rounds.textContent = roundCount
    }
}
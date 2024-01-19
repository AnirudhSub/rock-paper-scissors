var computerSelection;
var playerSelection;
var computerScore = 0;
var playerScore =0;

const score = document.getElementById("ScoreLive");
const test = document.getElementById("test");
const results = document.getElementById("results");
const humanFloat = document.getElementById("humanFloat");
const computerFloat = document.getElementById("computerFloat");

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0 :
            return 'paper';
            break;
        case 1 :
            return 'rock';
            break;
        case 2 :
            return 'scissors';
            break;
        default:
            break;
    }
};

computerSelection = computerPlay();

function playRound  ( playerSelection, computerSelection) {
    if( playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            playerScore +=1;
            results.innerText = `You won the round!\n Paper beats ${computerSelection}`
            checkWinner();
        }
        else if (computerSelection === 'scissors'){
            computerScore +=1;
            results.innerText = `Computer won the round!\n Scissors beats ${playerSelection}`
            checkWinner();
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore +=1;
            results.innerText = `Computer won the round!\n Rock beats ${playerSelection}`
            checkWinner();}
        else if (computerSelection === 'paper') {
            playerScore +=1;
            results.innerText = `You won the round!\n Scissors beats ${computerSelection}`
            checkWinner()} 
    };
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore +=1;
            results.innerText = `Computer won the round!\nPaper beats ${playerSelection}`
            checkWinner() }
        else if (computerSelection === 'scissors') {
            playerScore +=1;
            results.innerText = `You won the round!\nRock beats ${computerSelection}`;
            checkWinner()}
    };
    if (playerSelection === computerSelection) {
        results.innerText = `its a tie!\nYou both picked ${computerSelection}` 
        results.style.textAlign = 'center'};
        checkWinner()
};

var rock = document.getElementById('rock');
rock.addEventListener('click', function() {
    computerSelection = computerPlay()
    playerSelection = 'rock'
    console.log(playerSelection)
    console.log(computerSelection)
    playRound(playerSelection, computerSelection);
    update()
    humanFloat()
    })

var paper = document.getElementById('paper');
paper.addEventListener('click', function() {
    computerSelection = computerPlay()
    playerSelection = 'paper'
    playRound(playerSelection, computerSelection);
    update()
})

var scissors = document.getElementById('scissors');
scissors.addEventListener('click', function() {
    computerSelection = computerPlay()
    playerSelection = 'scissors'
    update()
    playRound(playerSelection, computerSelection);
})

function update(){
    score.textContent = `[ ${playerScore} : ${computerScore} ]`;
    humanFloat.style.visibility = 'visible';
    computerFloat.style.visibility = 'visible';

    if( playerSelection === 'rock') playerImg.src = "imgs/rock.png"
    else if( playerSelection === 'paper') playerImg.src = "imgs/paper.png"
    else if( playerSelection === 'scissors') playerImg.src = "imgs/scissors.png"
    if(computerSelection === 'rock') playerImg.src = "imgs/rock.png"
    else if ( computerSelection === 'paper') playerImg.src = "imgs/paper.png"
    else if ( computerSelection === 'scissors') playerImg.src = "imgs/scissors.png"
}



function checkWinner(){
    if (playerScore < 5 && computerScore < 5){
        results.style.textAlign = 'center'
    if (playerScore === 1 || computerScore === 1) {
        results.style.color = '#1C3144'
    }
    }else{
        declareWinner();
        playerScore = 0;
        computerScore = 0;
        //results.style.color = '#1C3144'
    }  
}
function declareWinner(){
    if (playerScore===5){
        results.style.textAlign = 'center'
        results.innerText = "You won the game!!!\nPlay another?";
        results.style.color = '#8ed081'

    } else if (computerScore===5){
        results.style.textAlign = 'center'
        results.innerText = "Sorry, it seems that you lost the game...\nPlay another?";
        results.style.color = '#fb6376'
    }
}
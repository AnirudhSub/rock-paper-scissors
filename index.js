function getComputerChoice() {
  var choice = Math.floor(Math.random()*3)
  if(choice == 0) return "rock"
  else if(choice == 1) return "paper"
  else return "scissor"
}

function getPlayerSelection(){
  var ip = prompt("Input rock , paper or scissors :").toLowerCase()
  if( ip == "rock" || ip == "paper" || ip =="scissors")
    return ip
  else{
    console.log("Please enter 'rock' , 'paper' or 'scissors' " )
    return getPlayerSelection()
  }
}

function playRound(playerSelection , computerSelection) {
    if((playerSelection == "rock" && computerSelection =="scissor") 
      || (playerSelection =="scissor" && computerSelection =="paper" ) 
      || (playerSelection == "paper" && computerSelection =="rock"))
      return "Win" //
    else if (playerSelection == computerSelection)
      return "Tie"
    else
      return "Lose" 
}


const btn = document.querySelector('#btn');
btn.onclick = startGame;

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.onclick = function() {
  makeSelection("rock");
};
paperBtn.onclick = function() {
  makeSelection("paper");
};
scissorsBtn.onclick = function() {
  makeSelection("scissor");
};

function makeSelection(playerSelection) {
  var computerSelection = getComputerChoice();
  var result = playRound(playerSelection, computerSelection);
  console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`);

  if (result === "Tie") {
    console.log("Tie happened, reroll");
  } else if (result === "Win") {
    console.log("You won!");
  } else {
    console.log("You lost!");
  }
}

function startGame(){
  // var playerWins = 0 , computerWins = 0 
  // while( playerWins != 5 && computerWins !=5){
  //   var playerSelection = getPlayerSelection()
  //   var computerSelection = getComputerChoice()
  //   var result = playRound(playerSelection , computerSelection)
  //   if(result == "Tie"){
  //     console.log("Tie happened , reroll")
  //   }
  //   if(result=="Win"){
  //     playerWins = playerWins + 1
  //     console.log("You won! you chose " + playerSelection + " and the computer chose " + computerSelection + " !")
  //   }
  //   else{
  //     computerWins = computerWins + 1
  //     console.log("You lost ! you chose " + playerSelection + "and the computer chose " + computerSelection+ " !")
  //   }     
  // }
  // if(playerWins == 5 ) console.log("Congratulations! you won five rounds!")
  // else console.log("Tough luck! Try again ")
  return 0
}




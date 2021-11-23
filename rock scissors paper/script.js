let computerScore = 0;
let playerScore = 0;
let gameRound = 3; /** set how many rounds in the game  */

let playerChoice;
let playerResult;
let computerChoice;
let computerResult;
const imageRockUrl = 'https://img.icons8.com/ios/50/000000/hand-rock.png';
const imagePaperUrl = 'https://img.icons8.com/ios/50/000000/hand.png';
const imageScissorsUrl = 'https://img.icons8.com/ios/50/000000/hand-scissors--v1.png';
let imgPlayer = document.createElement('img'); 
let imgComputer = document.createElement('img'); 
const array = ["rock", "paper", "scissors"];

// Start of the game
reset();

//update player Score and computer score

function scoreUpdate(){
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
  document.getElementById("round").innerHTML = gameRound;
}

// show  result message in the DOM

function winMessage(){
  document.getElementById("message").innerHTML = "You are winner";
  document.getElementById("message").style.color = "#45d492";
  
} 
function lostMessage(){
  document.getElementById("message").innerHTML = "Game over";
  document.getElementById("message").style.color = "#e44d61";
} 
function equalMessage(){
  document.getElementById("message").innerHTML = "No winner";
  document.getElementById("message").style.color = "#000";
} 

// show player choice in the DOM

function setPlayerResult(){
  if(playerChoice === "rock"){
    imgPlayer.src = imageRockUrl; 
    document.getElementById('playerResult').appendChild(imgPlayer);
    
  } else if(playerChoice === "paper"){
    imgPlayer.src = imagePaperUrl; 
    document.getElementById('playerResult').appendChild(imgPlayer);
  } else {
    imgPlayer.src = imageScissorsUrl; 
    document.getElementById('playerResult').appendChild(imgPlayer);
  }
} 

//show computer choice in the DOM

function setComputerResult(){
  computerChoice = array[Math.floor(Math.random() * array.length)];
  if(computerChoice === "rock"){
    imgComputer.src = imageRockUrl; 
    document.getElementById('computerResult').appendChild(imgComputer);
    
  } else if(computerChoice === "paper"){
    imgComputer.src = imagePaperUrl; 
    document.getElementById('computerResult').appendChild(imgComputer);
  } else {
    imgComputer.src = imageScissorsUrl; 
    document.getElementById('computerResult').appendChild(imgComputer);
  }
} 
//game over function, if no more game rounds left.



//Reset the game function

function reset() {
  computerScore = 0;
  playerScore = 0;
  gameRound = 3;
  scoreUpdate();
  document.getElementById("playerScore").innerHTML = 0;
  document.getElementById("computerScore").innerHTML = 0;
  document.getElementById("message").innerHTML = " ";
  document.getElementById('computerResult').innerHTML = " ";
  document.getElementById('playerResult').innerHTML = " ";
  document.getElementById("rock").disabled = false;
  document.getElementById("scissors").disabled = false;
  document.getElementById("paper").disabled = false;
}

// calculate the Winner in the game round
function calculateWinner(){
  if(playerChoice === "rock"){
    if(computerChoice === "paper"){
      computerScore++;
      scoreUpdate();
    } else if(computerChoice === "scissors"){
      playerScore++;
      scoreUpdate();
    } 
  }
  if(playerChoice === "paper"){
    if(computerChoice === "scissors"){
      computerScore++;
      scoreUpdate();
    } else if(computerChoice === "rock"){
      playerScore++;
      scoreUpdate();
    }
  }
  if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
      computerScore++;
      scoreUpdate();
    } else if(computerChoice === "paper"){
      playerScore++;
      scoreUpdate();
    } 
  } 
}
// calculate the winner in the game and disable buttons if the game is over.
function selectWinner(){
  if (gameRound > 1){
    gameRound--;
    scoreUpdate();
    calculateWinner();
  } else if(gameRound === 1) {
    gameRound--;
    scoreUpdate();
    calculateWinner();
    if (playerScore > computerScore){
      winMessage();
      document.getElementById("rock").disabled = true;
      document.getElementById("scissors").disabled = true;
      document.getElementById("paper").disabled = true;
    } else if(playerScore < computerScore){
      lostMessage();
      document.getElementById("rock").disabled = true;
      document.getElementById("scissors").disabled = true;
     document.getElementById("paper").disabled = true;
    } else {
      equalMessage();
      document.getElementById("rock").disabled = true;
      document.getElementById("scissors").disabled = true;
      document.getElementById("paper").disabled = true;
    }
  }
}


// functions on button click

function setRock(){
  playerChoice="rock";
  setPlayerResult();
  setComputerResult();
  selectWinner();
}
function setPaper(){
  playerChoice="paper";
  setPlayerResult();
  setComputerResult();
  selectWinner();
}
function setScissors(){
  playerChoice="scissors";
  setPlayerResult();
  setComputerResult();
  selectWinner(); 
}



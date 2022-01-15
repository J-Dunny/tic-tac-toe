var newGame = new Game;

var gameGrid = document.querySelector(".grid-section");
var whosTurn = document.querySelector(".whos-turn");
var playerTurn = document.querySelector("#playerTurn");
var player1Turn = document.querySelector(".player1-turn");
var player2Turn = document.querySelector(".player2-turn");
var boxes = document.querySelectorAll(".box");
var player1Wins = document.querySelector(".player-1-wins");
var player2Wins = document.querySelector(".player-2-wins");
var winnerDraw = document.querySelector(".win-draw");

gameGrid.addEventListener('click', gameOn);

function gameOn(e) {
    mark(e)
    displayWin()
    displayDraw()
  }

function mark(e){
  for (var i in boxes){
    if (boxes[i].id == i && e.target.id == i && !newGame.whosTurn && boxes[i].innerHTML === '') {
      newGame.makeMove(e)
      boxes[i].innerHTML = newGame.player1.token
    }

    else if (boxes[i].id == i && e.target.id == i && newGame.whosTurn && boxes[i].innerHTML === '') {
      newGame.makeMove(e)
      boxes[i].innerHTML = newGame.player2.token
    }
  }
  switchPlayer(e)
}

function switchPlayer(e) {
    if (!newGame.whosTurn){
    whosTurn.innerHTML = `<h3 id="playerTurn" class="player1-turn">It's ${newGame.player1.token}'s turn </h3>`
  } else {
    whosTurn.innerHTML = `<h3 id="playerTurn" class="player2-turn">It's ${newGame.player2.token}'s turn </h3>`
  }
}

function displayReset(){
  newGame.reset()
    for (var i in boxes){
      boxes[i].innerHTML = '';
    }
    winnerDraw.innerText = ``;
    whosTurn.innerHTML = `<h3 id="playerTurn" class="player1-turn">It's ${newGame.player1.token}'s turn </h3>`
  }

function displayWin(){
  if (newGame.win(newGame.player1)){
    player1Wins.innerText = `Wins: ${newGame.player1.wins}`;
    whosTurn.innerHTML  = `<h3 id="playerTurn" class="player1-turn"> ${newGame.player1.token}  WINS! </h3>`
    setTimeout('displayReset()', 2000)

  } else if (newGame.win(newGame.player2)){
    player2Wins.innerText = `Wins: ${newGame.player2.wins}`;
    whosTurn.innerHTML  = `<h3 id="playerTurn" class="player1-turn"> ${newGame.player2.token}  WINS! </h3>`
    setTimeout('displayReset()', 2000)
  }
}

function displayDraw(){
  if (newGame.draw()){
    whosTurn.innerHTML = `<h3 id="playerTurn" class="cats-game">It's a cat's game</h3>`
    setTimeout('displayReset()', 1500)
  }
}

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
    switchPlayer()
    displayDraw()
    displayWin()
  }

function updateBoard(e, player){
    for (var i in newGame.board){
      if (e.target.id === i){
        newGame.board[i] = player.id
        player.plays.push(parseInt(i))
      }

      // console.log(newGame.wins[i])
    }
    console.log(player.plays)
  }

function  makeMove(e) {
      if (!newGame.whosTurn ) {
        updateBoard(e, newGame.player1)
        // newGame.whosTurn += 1;
      }
      else if (newGame.whosTurn)  {
        updateBoard(e, newGame.player2)
        // newGame.whosTurn = 0;
      }
    }

function mark(e){
  for (var i in boxes){
    if (boxes[i].id == i && e.target.id == i && !newGame.whosTurn && boxes[i].innerHTML === '') {
      makeMove(e)
      boxes[i].innerHTML = newGame.player1.token
    }

    else if (boxes[i].id == i && e.target.id == i && newGame.whosTurn && boxes[i].innerHTML === '') {
      makeMove(e)
      boxes[i].innerHTML = newGame.player2.token
    }
  }
  // switchPlayer()
}

function switchPlayer() {
  newGame.whosTurn = !newGame.whosTurn

  if (!newGame.whosTurn){
    whosTurn.innerHTML = `<h3 id="playerTurn" class="player1-turn">It's ${newGame.player1.token}'s turn </h3>`
  } else {
    whosTurn.innerHTML = `<h3 id="playerTurn" class="player2-turn">It's ${newGame.player2.token}'s turn </h3>`
  }

}

function displayWin(){

  if (newGame.win('player1')){
    player1Wins.innerText = `Wins: ${newGame.player1.wins}`;
    whosTurn.innerHTML  = `<h3 id="playerTurn" class="player1-turn"> ${newGame.player1.token}  WINS! </h3>`
    setTimeout('displayReset()', 2000)
    console.log("player1 wins")

  }
  if (newGame.win('player2')){
    player2Wins.innerText = `Wins: ${newGame.player2.wins}`;
    whosTurn.innerHTML  = `<h3 id="playerTurn" class="player1-turn"> ${newGame.player2.token}  WINS! </h3>`
    setTimeout('displayReset()', 2000)
    console.log("player2 wins")
  }
}

function displayDraw(){
  if (newGame.draw()){
    whosTurn.innerHTML = `<h3 id="playerTurn" class="cats-game">It's a cat's game</h3>`
    setTimeout('displayReset()', 2000)
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

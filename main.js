var newGame = new Game;

var gameGrid = document.querySelector(".grid-section");
var whosTurn = document.querySelector(".whos-turn");
var playerTurn = document.querySelector("#playerTurn");
var boxes = document.querySelectorAll(".box");
var player1Wins = document.querySelector(".player-1-wins");
var player2Wins = document.querySelector(".player-2-wins");
var winnerDraw = document.querySelector(".win-draw");

gameGrid.addEventListener('click', gameOn);

function gameOn(e) {
  for (var i in boxes){
    if (boxes[i].innerHTML === ''){
      mark(e)
      displayDraw()
      displayWin()
    }
  }
}

function updateBoard(e, player){
  for (var i in newGame.board){
    if (e.target.id === i){
      newGame.board[i] = player.id
      player.plays.push(parseInt(i))
    }
  }
}

function  makeMove(e) {
  if (!newGame.whosTurn ) {
    updateBoard(e, newGame.player1)
  }
  else if (newGame.whosTurn)  {
    updateBoard(e, newGame.player2)
  }
}

function mark(e){
  for (var i in boxes){
    if (boxes[i].id == i && e.target.id == i && !newGame.whosTurn && boxes[i].innerHTML === '') {
      makeMove(e)
      boxes[i].innerHTML = newGame.player1.token
      switchPlayer()

    } else if (boxes[i].id == i && e.target.id == i && newGame.whosTurn && boxes[i].innerHTML === '') {
      makeMove(e)
      boxes[i].innerHTML = newGame.player2.token
      switchPlayer()
    }
  }
}

function switchPlayer() {
  newGame.whosTurn = !newGame.whosTurn

  if (!newGame.whosTurn){
    whosTurn.innerHTML = `<h3 id="playerTurn" class="player-1-turn">It's ${newGame.player1.token}'s turn </h3>`
  } else {
    whosTurn.innerHTML = `<h3 id="playerTurn" class="player-2-turn">It's ${newGame.player2.token}'s turn </h3>`
  }
}

function displayWin(){
  if (newGame.win('player1')){
    player1Wins.innerText = `Wins: ${newGame.player1.wins}`;

    whosTurn.innerHTML  = `<h3 id="playerTurn" class="player-1-turn"> ${newGame.player1.token}  WINS! </h3>`

    setTimeout('displayReset()', 2000)
    blockEmptyBoxes()
  }

  if (newGame.win('player2')){
    player2Wins.innerText = `Wins: ${newGame.player2.wins}`;

    whosTurn.innerHTML  = `<h3 id="playerTurn" class="player-2-turn"> ${newGame.player2.token}  WINS! </h3>`

    setTimeout('displayReset()', 2000)
    blockEmptyBoxes()
  }
}

function blockEmptyBoxes(){
  for (var i in boxes){
    if (boxes[i].innerHTML === '') {
      boxes[i].innerHTML = `<p class ="emptyBox">empty</p>`
    }
  }
}

function displayDraw(){
  if (newGame.draw()){
    whosTurn.innerHTML = `<h3 id="playerTurn" class="cats-game">It's a Draw</h3>`
    setTimeout('displayReset()', 2000)
  }
}

function displayReset(){
  newGame.reset()
    for (var i in boxes){
      boxes[i].innerHTML = '';
    }
    whosTurn.innerHTML = `<h3 id="playerTurn" class="player-1-turn">It's ${newGame.player1.token}'s turn </h3>`
  }

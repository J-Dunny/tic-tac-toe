var newGame = new Game;


var gameGrid = document.querySelector(".grid-section");
var whosTurn = document.querySelector(".whos-turn");
var playerTurn = document.querySelector("#playerTurn");
var player1Turn = document.querySelector(".player1-turn");
var boxes = document.querySelectorAll(".box");
var player1Wins = document.querySelector(".player-1-wins");
var player2Wins = document.querySelector(".player-2-wins");
var winnerDraw = document.querySelector(".win-draw");

gameGrid.addEventListener('click', switchPlayer);



function mark(e){
  for (var i in boxes){
    if (boxes[i].id == i && e.target.id == i && newGame.whosTurn && boxes[i].innerHTML === '') {
      boxes[i].innerHTML = newGame.player1.token
      newGame.makeMove(e)
      // boxes[i].disabled = true;
      // boxes[i].classList.add('disabled')
    }
    if (boxes[i].id == i && e.target.id == i && !newGame.whosTurn && boxes[i].innerHTML === '') {
      boxes[i].innerHTML = newGame.player2.token
      newGame.makeMove(e)
      // boxes[i].classList.add('disabled')
      // boxes[i].disabled = true;
    }

  }
}



function win(){
  if (!newGame.whosTurn){
    player1Wins.innerText = `Wins: ${newGame.player1.wins}`;
    winnerDraw.innerText = `Player ${newGame.player1.token} wins!`

  } else {
    player2Wins.innerText = `Wins: ${newGame.player2.wins}`;
    winnerDraw.innerText = `Player ${newGame.player2.token} wins!`

  }
}

var newGame = new Game;


var gameGrid = document.querySelector(".grid-section");

var boxes = document.querySelectorAll(".box");

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

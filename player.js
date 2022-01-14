class Player {
  constructor (id, token){
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  play(e){
    for (var i in newGame.board){
      if (e.target.id === i){
        newGame.board[i] = this.id
      }
    }
// --------- WIN ------------------------------------
    if ((newGame.board[0] === this.id && newGame.board[1] === this.id && newGame.board[2] === this.id)
    || (newGame.board[3] === this.id && newGame.board[4] === this.id && newGame.board[5] === this.id)
    || (newGame.board[6] === this.id && newGame.board[7] === this.id && newGame.board[8] === this.id)
    || (newGame.board[0] === this.id && newGame.board[3] === this.id && newGame.board[6] === this.id)
    || (newGame.board[1] === this.id && newGame.board[4] === this.id && newGame.board[7] === this.id)
    || (newGame.board[2] === this.id && newGame.board[5] === this.id && newGame.board[8] === this.id)
    || (newGame.board[2] === this.id && newGame.board[4] === this.id && newGame.board[6] === this.id)
    || (newGame.board[0] === this.id && newGame.board[4] === this.id && newGame.board[8] === this.id)){
      console.log("winner")

      this.wins += 1;
      displayWin()
      console.log(this.wins)
      setTimeout('displayReset()', 1500)
    }
// DRAW ----------------------------------


        else if (!newGame.board.includes(0)){
          console.log("draw")
          displayDraw()
          setTimeout('displayReset()', 1500)
        }

    }
}

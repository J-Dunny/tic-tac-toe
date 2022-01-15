class Game {
  constructor () {
    this.board = [0,0,0,
                  0,0,0,
                  0,0,0]
    this.whosTurn = 0;
    this.player1 = new Player(1, '🔥')
    this.player2 = new Player(2, '❄️')
  }
// '<img src="./assets/ice.jpeg" width="40px" alt="">'
  reset() {
    this.board = [0,0,0,
                  0,0,0,
                  0,0,0]
  }

  makeMove(e) {
      if (!this.whosTurn ) {
        this.player1.play(e)
        this.whosTurn += 1;
        console.log(e.target.id)
        console.log("player1")
      }
      else if (this.whosTurn)  {
        this.player2.play(e)
        this.whosTurn = 0;
        console.log("player2")
        console.log(e.target.id)
      }
    }

  win(player){
    if ((this.board[0] === player.id && this.board[1] === player.id && this.board[2] === player.id)
    || (this.board[3] === player.id && this.board[4] === player.id && this.board[5] === player.id)
    || (this.board[6] === player.id && this.board[7] === player.id && this.board[8] === player.id)
    || (this.board[0] === player.id && this.board[3] === player.id && this.board[6] === player.id)
    || (this.board[1] === player.id && this.board[4] === player.id && this.board[7] === player.id)
    || (this.board[2] === player.id && this.board[5] === player.id && this.board[8] === player.id)
    || (this.board[2] === player.id && this.board[4] === player.id && this.board[6] === player.id)
    || (this.board[0] === player.id && this.board[4] === player.id && this.board[8] === player.id)){

      player.wins += 1;

      return 1

    } else {
      return 0
    }
  }

  draw(){
    if (!newGame.board.includes(0)){
      return 1

    }
    else{
      return 0
    }
  }
}

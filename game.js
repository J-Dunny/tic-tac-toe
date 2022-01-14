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
        newGame.player1.play(e)
        this.whosTurn += 1;
        console.log(e.target.id)
        console.log("player1")
      }
      else if (this.whosTurn)  {
        newGame.player2.play(e)
        this.whosTurn = 0;
        console.log("player2")
        console.log(e.target.id)
      }
    }
}

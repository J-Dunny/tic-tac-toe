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




    // play(e, player){
    //   for (var i in this.board)
    //     if (e.target.id === i){
    //       this.board[i] = this.id
    //     }
    //
    //   if ((this.board[0] === player.id && this.board[1] === player.id && this.board[2] === player.id)
    //   || (this.board[3] === player.id && this.board[4] === player.id && this.board[5] === player.id)
    //   || (this.board[6] === player.id && this.board[7] === player.id && this.board[8] === player.id)
    //   || (this.board[0] === player.id && this.board[3] === player.id && this.board[6] === player.id)
    //   || (this.board[1] === player.id && this.board[4] === player.id && this.board[7] === player.id)
    //   || (this.board[2] === player.id && this.board[5] === player.id && this.board[8] === player.id)
    //   || (this.board[2] === player.id && this.board[4] === player.id && this.board[6] === player.id)
    //   || (this.board[0] === player.id && this.board[4] === player.id && this.board[8] === player.id)){
    //     console.log("winner")
    //
    //     player.wins += 1;
    //     console.log("player wins")
    //     console.log(player.wins)
    //     setTimeout('resetBoard()', 1500)
    //   }
    // }


}


// var player1 = new Player(1, '<img src="./assets/fire.png" width="40px" alt="">')
// var player2 = new Player(2, '<img src="./assets/ice.jpeg" width="40px" alt="">')



// [0,1,2
//  3,4,5
//  6,7,8]

class Game {
  constructor () {
    this.board = [0,0,0,
                  0,0,0,
                  0,0,0]
    this.whosTurn = 0;
    this.player1 = new Player(1, '🔥')
    this.player2 = new Player(2, '❄️')
    this.wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]]
  }
// '<img src="./assets/ice.jpeg" width="40px" alt="">'
  reset() {
    this.board = [0,0,0,
                  0,0,0,
                  0,0,0]
    newGame.player1.plays = [];
    newGame.player2.plays = [];
  }

  // play(player){
  //   player.plays.push
  // }

  win(player){
    // if ((this.board[0] === player.id && this.board[1] === player.id && this.board[2] === player.id)
    // || (this.board[3] === player.id && this.board[4] === player.id && this.board[5] === player.id)
    // || (this.board[6] === player.id && this.board[7] === player.id && this.board[8] === player.id)
    // || (this.board[0] === player.id && this.board[3] === player.id && this.board[6] === player.id)
    // || (this.board[1] === player.id && this.board[4] === player.id && this.board[7] === player.id)
    // || (this.board[2] === player.id && this.board[5] === player.id && this.board[8] === player.id)
    // || (this.board[2] === player.id && this.board[4] === player.id && this.board[6] === player.id)
    // || (this.board[0] === player.id && this.board[4] === player.id && this.board[8] === player.id)){
    for (var i in this.wins){
      if(this.wins[i].every(element => this[player].plays.includes(element))){
        this[player].wins += 1;
        return true
      }
      // else {
      //   return false
      // }

      // var winner = this.wins[i].every(element => {return player.plays.includes(element);});
    }

    // target.every(element => arr.includes(element));
    //
    // console.log(checker(array2, array1));  // true
    // console.log(checker(array3, array1));


    // for(var i in this.wins){
    //   if(player.plays.includes(this.wins[i])){
    //     player.wins += 1;
    //     return 1
    //
    //   } else {
    //   return 0
    // }
  }
    // player.wins += 1;
    // return 1
    //
    // } else {
    //   return 0
    // }
  // }

  draw(){
    if (!newGame.board.includes(0)){
      return 1
    }
    else{
      return 0
    }
  }
}

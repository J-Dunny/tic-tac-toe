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
      win()
      console.log(this.wins)
      setTimeout('resetBoard()', 1500)
    }
// DRAW ----------------------------------
    for (var i in newGame.board){
      if (!newGame.board.includes(0)){
        console.log("draw")
        setTimeout('resetBoard()', 1500)
      }
    }
  }



//   winner(){
//     if ((newGame.board[0] === this.id && newGame.board[1] === this.id && newGame.board[2] === this.id)
//     || (newGame.board[3] === this.id && newGame.board[4] === this.id && newGame.board[5] === this.id)
//     || (newGame.board[6] === this.id && newGame.board[7] === this.id && newGame.board[8] === this.id)
//     || (newGame.board[0] === this.id && newGame.board[3] === this.id && newGame.board[6] === this.id)
//     || (newGame.board[1] === this.id && newGame.board[4] === this.id && newGame.board[7] === this.id)
//     || (newGame.board[2] === this.id && newGame.board[5] === this.id && newGame.board[8] === this.id)
//     || (newGame.board[2] === this.id && newGame.board[4] === this.id && newGame.board[6] === this.id)
//     || (newGame.board[0] === this.id && newGame.board[4] === this.id && newGame.board[8] === this.id)){
//       console.log("winner")
//
//       this.wins += 1;
//       // win()
//       console.log(this.wins)
//       setTimeout('resetBoard()', 1500)
//   }
//
//
// }
}
// setTimeout('resetBoard()', 2000)

// win(game){
  // for (i in game){
  //   if(game.board[1] === i)
  // }
  // var played = []
  // var win = {
  //   [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]
  // }
  //
  // for (i in game){
  //   if(game.board[i])
  // }

  // if ((game.board[0] === this.id && game.board[1] === this.id && game.board[2] === this.id)
  // || (game.board[3] === this.id && game.board[4] === this.id && game.board[5] === this.id)
  // || (game.board[6] === this.id && game.board[7] === this.id && game.board[8] === this.id)
  // || (game.board[0] === this.id && game.board[3] === this.id && game.board[6] === this.id)
  // || (game.board[1] === this.id && game.board[4] === this.id && game.board[7] === this.id)
  // || (game.board[2] === this.id && game.board[5] === this.id && game.board[8] === this.id)
  // || (game.board[2] === this.id && game.board[4] === this.id && game.board[6] === this.id)
  // || (game.board[0] === this.id && game.board[4] === this.id && game.board[8] === this.id)){
  //   this.wins += 1;
  //   game.reset()
  // }
  // if(game.board[3] === this.id && game.board[4] === this.id && game.board[5] === this.id){
  //   this.wins += 1;
  //   game.reset()
  // }
  // if(game.board[6] === this.id && game.board[7] === this.id && game.board[8] === this.id){
  //   this.wins += 1;
  //   game.reset()
  // }
  // if(game.board[0] === this.id && game.board[3] === this.id && game.board[6] === this.id){
  //   this.wins += 1;
  //   game.reset()
  // }
  // if(game.board[1] === this.id && game.board[4] === this.id && game.board[7] === this.id){
  //   this.wins += 1;
  //   game.reset()
  // }
  // if(game.board[2] === this.id && game.board[5] === this.id && game.board[8] === this.id){
  //   this.wins += 1;
  //   game.reset()
  // }
  // if(game.board[2] === this.id && game.board[4] === this.id && game.board[6] === this.id){
  //   this.wins += 1;
  //   game.reset()
  // }
  // if(game.board[0] === this.id && game.board[4] === this.id && game.board[8] === this.id){
  //   this.wins += 1;
  //   game.reset()
  // }

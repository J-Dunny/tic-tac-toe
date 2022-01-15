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

    }
}

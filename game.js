class Game {
  constructor () {
    this.board = [0,0,0,
                  0,0,0,
                  0,0,0];
    this.whosTurn = 0;
    this.player1 = new Player(1, '🔥');
    this.player2 = new Player(2, '❄️');
    this.wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]];
  }

  reset() {
    this.board = [0,0,0,
                  0,0,0,
                  0,0,0];
    this.whosTurn = 0;
    this.player1.plays = [];
    this.player2.plays = [];
  }

  win(player) {
    for (var i in this.wins) {
      if(this.wins[i].every(winCombo => this[player].plays.includes(winCombo))) {
        this[player].wins += 1;

        return true;
      }
    }
  }

  draw() {
      return !newGame.board.includes(0);
  }
}

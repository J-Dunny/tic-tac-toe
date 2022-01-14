class Game {
  constructor () {
    this.board = [0,0,0,
                  0,0,0,
                  0,0,0]
    this.whosTurn = 0;
    this.player1 = new Player(1, '🔥')
    this.player2 = new Player(2, '❄️')
  }

}


// var player1 = new Player(1, '<img src="./assets/fire.png" width="40px" alt="">')
// var player2 = new Player(2, '<img src="./assets/ice.jpeg" width="40px" alt="">')



// [0,1,2
//  3,4,5
//  6,7,8]

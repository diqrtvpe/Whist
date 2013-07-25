// Need player state and game state. Player state is an object with id, name, score, and card array
// The players object needs methods to add and remove playerStates.

// I thought I needed to keep the history in the shared state, but I don't, I can keep that locally because it won't change

// The game state needs to be kept in the shared state.

var playerState = function(part) {
    this.id = part.id;
    this.name = part.name;
    this.hand = [];
};

var players = [];

players.add = function(part) {
    this.push(new playerState(part));
};

var gameState = function(round) {
    this.round = round;
    this.trump = false;
    this.bids = [];
    this.scores = [];
    this.cardsAvailable = [];
    this.tricks = [];
    this.currTrick = [];
};

var game = [];

game.add = function(round) {
    this.push(new gameState(round));
};

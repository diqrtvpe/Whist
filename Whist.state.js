// Need player state and game state. Player state is an object with id, name, score, and card array
// The players object needs methods to add and remove playerStates.

var playerState = function(part) {
    this.id = part.id;
    this.name = part.name;
    this.score = 0;
    this.hand = [];
};

var players = [];

players.add = function(part) {
    this.push(new playerState(part));
};
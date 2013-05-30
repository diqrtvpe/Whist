var gameStarted = false;
var numPlayers=0;
var round = 0;
var cardsAvailable = [];
var trump=false;
var dealer=0;

var card = function(id) {
    this.id = id;
    var suit = id.charAt(id.length-1);
    switch(suit) {
	case 'C':
	this.suit='clubs';
	break;
	case 'D':
	this.suit='diamonds';
	break;
	case 'H':
	this.suit='hearts';
	break;
	case 'S':
	this.suit='spades';
	break;
    }
    var val = id.match(/[^CDHS]/g).join("");
    switch(val) {
	case 'J':
	this.val=11;
	break;
	case 'Q':
	this.val=12;
	break;
	case 'K':
	this.val=13;
	break;
	case 'A':
	this.val=14;
	break;
	default:
	this.val=val;
	break;
    }
    this.face = 'Images/'+id+'.svg';
};

var cardIds = ["2C","3C","4C","5C","6C","7C",'8C','9C','10C','JC','QC','KC','AC',"2D","3D","4D","5D","6D","7D",'8D','9D','10D','JD','QD','KD','AD',"2H","3H","4H","5H","6H","7H",'8H','9H','10H','JH','QH','KH','AH',"2S","3S","4S","5S","6S","7S",'8S','9S','10S','JS','QS','KS','AS'];
var cards = cardIds.map(function(x) {card(x);});

function randCard() {
    var numCards = cardsAvailable.length;
    return Math.floor(Math.random() * numCards) +1;
}

function startGame() {
    if (!gameStarted) {
	numPlayers=players.length;
	dealer=Math.floor(Math.random() * numPlayers) +1;
	round = 1;
	// Put some GUI stuff in here once it's done
    }
}

function startRound() {
    cardsAvailable = cards.slice(0);
    
}
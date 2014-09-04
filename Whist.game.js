/* Based on the example of CAH, I need to change this a little bit. I should follow its example of using the shared state with the sendEvent function. Use a startGame function to set the dealer and deal the cards, with the onStateChanged function checking that the */

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

function deal(num,rand) {
    var card = this[num];
    if (num == this.length) {
	stop("This card doesn't exist");
    }
    this.splice(num,1);
    return(card);
}

function refillCards() {
    cardsAvailable = cards.slice(0);
    cardsAvailable.deal=deal;
    players.forEach(function(x) {x.hand = [];});
};

function newCard() {
    var numCards = cardsAvailable.length;
    var rand = Math.random();
    return cardsAvailable.deal(Math.floor(rand * numCards));
}

function dealCards(num) {
    for (var i = 0; i < num; i++) {
	for (var j = 0; j < numPlayers; j++) {
	    players[j].hand.push(newCard());
	}
    }
}

function startGame() {
    if (!gameStarted) {
	
	numPlayers=players.length;
	dealer=Math.floor(Math.random() * numPlayers) +1;
	round = 1;
	// Update the shared game state
	// Put some GUI stuff in here once it's done
    }
}

function startRound() {
    refillCards();
    trump = false;
    switch(round) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
	dealCards(round);
	trump = newCard();
	showHands();
	showTrump();
	startBidding();
	break;
    case 8:
	dealCards(7);
	trump = newCard();
	showHands();
	startBidding();
	showTrump();
	break;
    case 9:
	dealCards(7);
	trump = newCard();
	startBidding();
	showHands();
	showTrump();
	break;
    case 10:
	dealCards(7);
	trump = newCard();
	Misere();
	//MISERE
	break;
    case 11:
	dealCards(7);
	showHands();
	startBidding();
	//No Trump
	break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
	dealCards(19-round);
	trump = newCard();
	showHands();
	showTrump();
	startBidding();
	//GUI stuff to show cards and trump, and start bidding
	break;
    }
}

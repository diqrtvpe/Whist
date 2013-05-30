//Initialize the game state. Get players, check to see if game is ongoing; if so, spectate. 
var spectators = new Array();

gapi.hangout.onApiReady.add(function (eventObj) {
    if (eventObj.isApiReady) {
	initialize();
    }
});

function initialize() {
    //Google API
    var plID = gapi.hangout.getParticipantID();
    var user = {"name": gapi.hangout.getParticipantById(participantID).person.displayName,
            "id": gapi.hangout.getParticipantById(participantID).person.id,
            "imageURL": gapi.hangout.getParticipantById(participantID).person.image.url,
            "participantID": participantID
    };
    
}

function updatePlayers() {
    var playArray = gapi.hangout.getEnabledParticipants();
    for (var i = 0, l = playArray.length; i < l; i++) {
	
    }
}
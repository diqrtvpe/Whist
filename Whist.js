//Initialize the game state. Get players, check to see if game is ongoing; if so, spectate. 
var spectators = new Array();
var unique_id = 0;

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
    gapi.hangout.data.onStateChanged.add(stateChanged);
}

//After the functions of the same names in samurailink3's hangouts-against-humanity project
function uniqid() {
    unique_id++;
    return user.id+unique_id;
}

function sendEvent(eventName, eventData) {
    var id = uniqid();
    if (!eventData) {
	eventData = new Object();
	eventData.sender = user.id;
    }
    gapi.hangout.data.setValue(eventName+"##"+id,JSON.stringify(eventData));
}
    
function stateChanged(event) {
    try {
        Ext.iterate(event.addedKeys, function (obj,index) {
	//event function call
            if (obj.key.search("##")> 0) {
                var eventData = JSON.parse(obj.value);
                var id = obj.key.search("##");
                var funcName = obj.key.substr(0,id);
                eval(funcName + "(eventData)");
                gapi.hangout.data.clearValue(obj.key);
            }
        });

    }
    catch (e) {

        console.log('Fail state changed');
        console.log(e);
        console.log(event);
    }
}

function updatePlayers() {
    var playArray = gapi.hangout.getEnabledParticipants();
    for (var i = 0, l = playArray.length; i < l; i++) {
	
    }
}

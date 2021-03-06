function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = [   "Oooh yeah! Can do!", 
                                "Yes sireee!" , 
                                "Oh, yeah!, Yes, ma'am!"    ];
}

MrMeeseeks.prototype.speakOnCreate= function speakOnCreate() {
    console.log(this.messageOnCreate);
}

MrMeeseeks.prototype.speakOnRequest = function speakOnRequest() {
    // Numero aleatorio entre 0 y la longitud del array de mensajes.
    let randomNumber = Math.floor(Math.random() * this.messageOnRequest.length);;
    let message = this.messageOnRequest[randomNumber];
    console.log(message);
    // return string value for the tests
    return message;
}

MrMeeseeks.prototype.makeRequest = function makeRequest(action, object) {
    let prepareRequest = function(object) {
        function execute() {
            return action + " " + object;
        }
        return execute;
    };

    this.accion = prepareRequest(object);
    this.speakOnRequest();
}

MrMeeseeks.prototype.fulfillRequest = function fulfillRequest() {
    console.log(this.accion() + " All done!!");
    // return string value for the tests
    return this.accion() + " All done!!";
}

MrMeeseeks.prototype.learnRequest = function learnRequest(action, object) {
    this.accion = action(object);
}


// Singleton MrMeeseeks
var factory = (function singleMrMeeseeks() {
    const proto = new MrMeeseeks();
    return {
        // devolvemos el prototipo
        get: () => proto
    }
})()

exports.singleMrMeeseeks = factory;
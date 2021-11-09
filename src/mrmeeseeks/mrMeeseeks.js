function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
}

// Singleton MrMeeseeks
var factory = (function singleMrMeeseeks() {
    return {
        // devolvemos el prototipo
        get: () => {return new MrMeeseeks}
    }
})()

exports.singleMrMeeseeks = factory;
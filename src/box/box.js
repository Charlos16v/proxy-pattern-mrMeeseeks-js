var singletonMrMeeseeks = require("../mrmeeseeks/mrMeeseeks.js");

function Box() {
    this.name = "Rick's box";
    this.mrMeeseeks = null;
}
var mrMeeseeks = {
    messageOnCreate: "I'm Mr Meeseeks! Look at meeee!"
}

Box.prototype.createMrMeeseeks = function createMrMeeseeks() {
    if(this.mrMeeseeks == null) {
        this.mrMeeseeks = singletonMrMeeseeks.singleMrMeeseeks.get();
    }

    return Object.create(this.mrMeeseeks);
}

Box.prototype.getProtoMeeseks = function getProtoMeeseks() {
    if(this.mrMeeseeks != null) {
        return this.mrMeeseeks;
    }
}

Box.prototype.pressButton = function pressButton(reality) {
    let newMrMeeseeksClone = this.createMrMeeseeks()
    this.mrMeeseeks.speakOnCreate();
    reality.push(newMrMeeseeksClone);
}


var factory = (function singletonBox() {
    const box = new Box();

    // Arrow function en este caso es viable.
    // Tambien podria ser () => {return box}
    //getBox: function getBox() {
    //    return box;
    //  }
    return {
        getBox: () => box
        }
})() // Este codigo siempre se ejecuta al tener () al final.

exports.singletonBox = factory;
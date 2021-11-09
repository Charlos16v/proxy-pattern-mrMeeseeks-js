function Box() {
    this.name = "Rick's box";
    this.mrMeeseeks = null;
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
})()

exports.singletonBox = factory;
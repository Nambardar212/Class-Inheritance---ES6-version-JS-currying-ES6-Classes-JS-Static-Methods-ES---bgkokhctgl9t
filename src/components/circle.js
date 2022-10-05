// import using require

// declare class


// export class using module.exports
var Shape = require('./shape.js');

class Circle extends Shape {
     constructor(color) {
          super();
     }
     calculateArea() {

     }
}

module.exports = Circle;

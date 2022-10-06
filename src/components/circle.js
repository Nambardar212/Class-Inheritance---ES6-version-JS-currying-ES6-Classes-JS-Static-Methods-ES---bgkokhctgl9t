// import using require

// declare class


// export class using module.exports
var Shape = require('./shape.js');

class Circle extends Shape {
     constructor(color) {
          super(color);
     }
     calculateArea(radius) {
         return Math.PI * Math.pow(radius,2);
     }
}

module.exports = Circle;

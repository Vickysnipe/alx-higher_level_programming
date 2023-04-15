#!/usr/bin/node
// A class Square that defines and inherits
// from Square of 5-square.js and create an
// instance method called charPrint(c) that prints the
// rectangle using the character c

const SquareSupp = require('./5-square');

class Square extends SquareSupp {
  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
}

module.exports = Square;

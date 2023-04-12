#!/usr/bin/node
// A function that executes a function x amount of times
exports.callMeMoby = function (x, theFunction) {
  let i = 0;
  while (i < x) {
    theFunction();
    i++;
  }
};

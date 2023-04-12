#!/usr/bin/node
// Script that computes and prints a factorial

function factorial (num) {
  let fact;
  if (num > 0) {
    fact = num * factorial(num - 1);
    return (fact);
  } else {
    return (1);
  }
}
const num = parseInt(process.argv[2]);
console.log(factorial(num));

#!/usr/bin/node
// Searches for the second biggest integer in the list of arguments

function convertToNumber (element) {
  intArray.push(parseInt(element));
}

const arrayLen = process.argv.length;
const newArray = [];
const intArray = [];
let max2 = 0;

if (process.argv.length <= 3) {
  console.log('0');
} else {
  for (let i = 2; i < arrayLen; i++) {
    newArray.push(process.argv[i]);
  }
  newArray.forEach(convertToNumber);
  intArray.sort((a, b) => a - b);
  max2 = intArray[intArray.length - 2];
  console.log(max2);
}

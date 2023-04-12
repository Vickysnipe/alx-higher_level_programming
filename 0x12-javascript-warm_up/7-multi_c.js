#!/usr/bin/node
//  A script that prints x times C is fun
let i; const times = parseInt(process.argv[2]);

if (isNaN(times)) {
  console.log('Missing number of occurrences');
} else {
  for (i = 0; i < times; i++) {
    console.log('C is fun');
  }
}

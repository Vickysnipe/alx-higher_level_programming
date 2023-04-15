#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let occcur = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
      occcur += 1;
    }
  }
  return occcur;
};

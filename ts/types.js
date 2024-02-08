"use strict";
// tuple
var point = [7, 5];
var entries = Object.entries({ a: 1, b: 2 });
var toStr = function (num) { return String(num); };
var hoge = function (callback) {
    return callback(10);
};
console.log(hoge(toStr));

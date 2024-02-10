"use strict";
// tuple
var point = [7, 5];
var toStr = function (num) { return String(num); };
// 関数を引数にした場合、関数の型も定義することができる
var hoge = function (callback) {
    return callback(10);
};
// optimal parameter
var hey = function (word) {
    var wrd = word !== null && word !== void 0 ? word : "hoge";
    return wrd;
};
// rest parameters
function joinNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.join("-");
}
joinNumbers(1, 2, 3);
// making omission explict
function stringify123(callback) {
    var num = 123;
    if (callback === undefined) {
        // (A)
        callback = String;
    }
    return callback(num); // (B)
}
// 上の書き方だと明示する必要がある
stringify123(undefined);
var test = function (point) {
    return point.x;
};
var p = {
    x: 2,
    y: 3,
    distance: function () {
        return 1;
    },
};
var val = [1, 2, 3];
var identity = function (arg) { return arg; };
console.log(identity("hello"));
console.log(identity("hello"));
// complicated type
function fillArray(len, elem) {
    return new Array(len).fill(elem);
}
var arr = fillArray(3, 5);
console.log(arr);

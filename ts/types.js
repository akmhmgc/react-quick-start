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
    return nums.join('-');
}
joinNumbers(1, 2, 3);

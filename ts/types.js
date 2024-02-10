var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Sample_arr;
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
var Sample = /** @class */ (function () {
    function Sample() {
        _Sample_arr.set(this, []);
    }
    Sample.prototype.add = function (elm) {
        __classPrivateFieldGet(this, _Sample_arr, "f").push(elm);
    };
    return Sample;
}());
_Sample_arr = new WeakMap();
var sample = new Sample();

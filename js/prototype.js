// プロトタイプメソッドの上書き
Array.prototype.toString = () => 999;
const numbers = [1, 2, 3];
// `Array.prototype.toString`が定義されているため、`Object.prototype.toString`とは異なる出力形式となる
console.log(numbers.toString()); // => "1,2,3"

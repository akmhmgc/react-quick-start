"use strict";

function fc() {
  return this;
}


const obj = {
  // 関数式をプロパティの値にしたメソッド
  method1: function() {
      return this;
  },
  // 短縮記法で定義したメソッド
  method2() {
      return this;
  }
};
// メソッド呼び出しの場合、それぞれの`this`はベースオブジェクト(`obj`)を参照する
// メソッド呼び出しの`.`の左にあるオブジェクトがベースオブジェクト
console.log(obj.method1()); // => obj
console.log(obj.method2()); // => obj

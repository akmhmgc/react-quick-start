"use strict";
function fn() {
  return "hello";
}

class MyClass {
  method() {
    console.log("プロトタイプのメソッド");
  }
}

// 定義したメソッドはプロトタイプオブジェクトに定義
const myClass = new MyClass();
console.log(Object.getPrototypeOf(myClass));

const obj = { foo: "foo" };

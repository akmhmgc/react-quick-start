"use strict";

// const object = Object.freeze({ key: "value" });
const object = Object.freeze({ key: "value" });
// freezeしたオブジェクトにプロパティを追加や変更できない
object.hoge = "value";

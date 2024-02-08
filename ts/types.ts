// tuple
let point: [number, number] = [7, 5];

const entries = Object.entries({ a: 1, b: 2 });

const toStr = (num: number): string => String(num);

// 関数を引数にした場合、関数の型も定義することができる
const hoge = (callback: (num: number) => string) => {
  return callback(10);
};

console.log(hoge(toStr));

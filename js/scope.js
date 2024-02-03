const createCounter = () => {
  let count = 0;
  return function increment() {
    // `increment`関数は`createCounter`関数のスコープに定義された`変数`count`を参照している
    count = count + 1;
    return count;
  };
};
// createCounter()の実行結果は、内側で定義されていた`increment`関数

// メモリ上から解放されるので値は保持されない
console.log(createCounter()()); // => 1
console.log(createCounter()()); // => 1

// 参照され続けるので値が保持される
const myCounter = createCounter();
console.log(myCounter()); // => 1
console.log(myCounter()); // => 2

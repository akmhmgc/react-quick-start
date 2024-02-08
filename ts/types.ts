// tuple
let point: [number, number] = [7, 5];

const toStr = (num: number): string => String(num);

// 関数を引数にした場合、関数の型も定義することができる
const hoge = (callback: (num: number) => string) => {
  return callback(10);
};

// optimal parameter
const hey = (word?: string): string => {
  const wrd = word ?? "hoge";
  return wrd;
};

// rest parameters
function joinNumbers(...nums: number[]): string {
  return nums.join('-');
}

joinNumbers(1,2,3)

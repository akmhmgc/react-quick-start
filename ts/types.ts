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
  return nums.join("-");
}

joinNumbers(1, 2, 3);

// making omission explict
function stringify123(callback: undefined | ((num: number) => string)) {
  const num = 123;
  if (callback === undefined) {
    // (A)
    callback = String;
  }
  return callback(num); // (B)
}

// 上の書き方だと明示する必要がある
stringify123(undefined);

// interface
// interface Point {
//   x: number;
//   y: number;
//   distance(num: number): number;
// }

interface Point {
  x: number;
  y: number;
  distance: (num: number) => number;
}

const test = (point: Point) => {
  return point.x;
};

const p: Point = {
  x: 2,
  y: 3,
  distance: function (): number {
    return 1;
  },
};

interface HasMethodDef {
  simpleMethod(flag: boolean): void;
}
interface HasFuncProp {
  simpleMethod: (flag: boolean) => void;
}

// type factory
type TypeFactory<X> = X; // definition
type MyType = TypeFactory<string>; // use

type TypeFactory2<T> = Array<T>;
type MyType2 = TypeFactory2<number>;
const val: MyType2 = [1, 2, 3];

const identity = <Arg>(arg: Arg): Arg => arg;

console.log(identity<string>("hello"));
console.log(identity("hello"));

// complicated type
function fillArray<T>(len: number, elem: T): T[] {
  return new Array<T>(len).fill(elem);
}

const arr = fillArray<number>(3, 5);
console.log(arr)

type arr = Array<string[]>
const array2:arr = [["a"]]

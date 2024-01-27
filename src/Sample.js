import React, { useState, useEffect, useCallback } from "react";

function Example({ count, clickHandler }) {
  useEffect(() => {
    console.log(`変更されました ${count}`);
  }, [count]);
  const now = new Date();
  // 第二引数が変化した時点で新しい関数が生成される
  const click = useCallback(() => console.log(now.getSeconds()), [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clickHandler}>Click me</button>
      <button onClick={click}>わめき</button>
    </div>
  );
}

function initialValue() {
  console.log("計算は走るよ");
  return 1;
}

function Counter1() {
  // こういう感じに呼び出すことでコストが下がる
  const [value, setValue] = useState(() => initialValue());
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  return (
    <div>
      Counter: {value}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
function Main() {
  const [count, setCount] = useState(0);
  function clickHandler() {
    setCount(count + 1);
  }
  return (
    <>
      <Counter1 />
    </>
  );
}

export default Main;

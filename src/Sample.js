import React, { useState, useEffect, useCallback } from "react";

function Example({ count, clickHandler }) {
  useEffect(() => {
    console.log(`変更されました ${count}`);
  }, [count]);
  const now = new Date();
  // 第二引数が変化した時点で新しい関数が生成される
  const click = useCallback(()=> console.log(now.getSeconds()), [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clickHandler}>Click me</button>
      <button onClick={click}>わめき</button>
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
      <Example count={count} clickHandler={clickHandler} />
    </>
  );
}

export default Main;

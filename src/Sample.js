import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // 副作用のある処理を実行
  useEffect(() => {
    // Update the document title using the browser API
    document.getElementsByClassName("title")[0].innerHTML = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <p className='title'>title</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

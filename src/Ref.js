import { useRef } from "react";

export default function Foo() {
  // `null`を渡すことによってuseRefを初期化します。
  const input = useRef(null);
  const onClick = () => {
    console.log(input)
  };

  return (
    <>
      <input ref={input} />
      <button onClick={onClick}>Focus input</button>
    </>
  );
}

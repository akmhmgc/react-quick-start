import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  function textHandler(text) {
    setText(text);
  }

  return (
    <>
      <div>
        <label htmlFor="">Controlled</label>
        <input value={text} onInput={(e) => textHandler(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Uncontrolled</label>
        <input  />
      </div>
    </>
  );
}

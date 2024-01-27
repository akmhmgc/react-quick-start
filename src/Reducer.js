import { useReducer } from "react";

function reducer(state, action) {
  console.log(state)
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setText':
      return { ...state, text: action.text };
    default:
      return state;
  }
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: '' });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <p>Text: {state.text}</p>
      <button onClick={() => dispatch({ type: 'setText', text: 'Hello' })}>Set Text</button>
    </>
  );
}

export default MyComponent;

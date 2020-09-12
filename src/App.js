import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={resetCount}>reset</button>
    </>
  );
}

export default App;

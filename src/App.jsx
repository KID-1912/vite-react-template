import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello World</h1>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        尝试
      </button>
    </>
  );
}

export default App;

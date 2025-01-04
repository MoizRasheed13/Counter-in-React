import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1 className={`count ${count>= 0? "positive": "negative"}`}>
        {count}
      </h1>
      <div className="button-container">
        
        <button className="button" onClick={decrement}>
          Decrement
        </button>
        <button className="button reset-button" onClick={reset}>
          Reset
        </button>
        <button className="button" onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;

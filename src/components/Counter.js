import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button
        className="btn btn-special"
        onClick={() => setCount((c) => c + 1)}
      ></button>
    </div>
  );
}
export default Counter;

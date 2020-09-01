import React, { useState } from "react";

const Counter = () => {
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)
  return (
    <div>
      <div>
        <h1>{`Increase By 1: ${count}`}</h1>
        <button onClick={() => setCount(count+1)}>Click me !</button>
      </div>
      <div>
        <h1>{`Increase By 2: ${count2}`}</h1>
        <button onClick={() => setCount2(count2+2)}>Click me !</button>
      </div>
    </div>
  );
};

export default Counter;

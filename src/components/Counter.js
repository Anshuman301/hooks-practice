import React, { useState, useMemo } from "react";

const Compute = ({count,setCount,children}) =>{
  console.log("hi")
  return(
    <div>
        <h1>{`${children} ${count}`}</h1>
        <button onClick={() => setCount(count+1)}>Click me !</button>
      </div>
  )
}
const Counter = () => {
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)

  const MemoHook1 = useMemo(() => <Compute count={count} setCount={setCount}>
  Increase by 1:
</Compute>,[count,setCount] )

const MemoHook2 = useMemo(() => <Compute count={count2} setCount={setCount2}>
Increase by 2:
</Compute>,[count2,setCount2])
  return (
    <div>
     {MemoHook1}
      {MemoHook2}
    </div>
  );
};

export default Counter;

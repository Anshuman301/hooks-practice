import React, { useEffect, useState } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [isStart,setStart] = useState(false);
  useEffect(() => {
    if(isStart){
      setTimeout(() => {
        setSecond(second + 1);
      }, 1000);
    }
  });

  const textButton = !isStart ? "Start":"Stop"
  return (
    <div>
      <button onClick={() =>setStart(!isStart)}>{textButton}</button>
      <hr/>
      <h1>{`Timer::${second}`}</h1>
    </div>
  );
};

export default Timer;

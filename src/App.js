import React from "react";
import "./styles.css";
import Counter from "./components/Counter";
import StateHooks2 from "./components/StateHooks2";
import Timer from "./components/Timer";
import FetchTodo from "./components/FetchTodo";
import AdvCounter from "./components/AdvCounter";
export default function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <StateHooks2/>  */}
      {/* <Timer/> */}
      <FetchTodo/>
      {/* <AdvCounter/> */}
    </div>
  );
}

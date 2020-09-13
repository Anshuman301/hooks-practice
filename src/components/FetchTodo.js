import React, { useEffect, useState, useCallback } from "react";
const FetchTodo = () => {
  const [todo, setTodo] = useState(null);
  const [isMount, setMount] = useState(false);
  const [id,setId] = useState(1)
  const fetchData = useCallback(async () =>{
    console.log("hi")
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data =  await resp.json()
    setTodo({ ...data })
    setMount(true)
  },[id])
  useEffect(() => {
        fetchData();
    return () => {
      setTodo(null);
      setMount(false)
    };
  }, [fetchData]);
  const text = isMount ? "Mount":"Unmount"
  return (
    <div>
      <h1>{todo?.title}</h1>
      <input type="number" value={id} onChange={e => setId(e.target.value)}/>
      <button disabled={!isMount}>{text}</button>
    </div>
  );
};

export default FetchTodo;

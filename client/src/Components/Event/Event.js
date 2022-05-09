import React, { useState, useEffect } from "react";
import axios from "axios";
import EventInput from "./EventInput";
import EventList from "./EventList";

const Event = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    axios
      .get("/api/todos")
      .then((res) => {
        if (res.data) {
          setTodos(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const deleteTodos = (id) => {
    axios.delete(`/api/todos/${id}`).then((res) => {
      if (res.data) {
        getTodos();
      }
    });
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {/* <Count />
      <EventInput getTodos={() => getTodos()} /> */}
      <h1 className={styles.title}>List of Event(s)</h1>
      <EventList todos={todos} deleteTodo={(id) => deleteTodos(id)} />
    </div>
  );
};
export default Event;

export function Count() {
  const [count, setCount] = useState(
    JSON.parse(window.localStorage.getItem("count"))
  );

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem("count")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  const increaseCount = () => {
    return setCount(count + 1);
  };
  const decreaseCount = () => {
    return setCount(count - 1);
  };

  return (
    
    <div className="App">
      <h1> Count {count} </h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}

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
      <h1>My Todo(s)</h1>
      <EventInput getTodos={() => getTodos()} />
      <EventList todos={todos} deleteTodo={(id)=>deleteTodos(id)} />
    </div>
  );
};
export default Event;

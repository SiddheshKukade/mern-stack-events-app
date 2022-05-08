import React, { useState } from "react";
import axios from "axios";

const EventInput = ({ getTodos }) => {
  const [action, setAction] = useState("");
  const addTodo = () => {
    const task = { action };
    if (task.action && task.action.length > 0) {
      axios
        .post("/api/todos", task)
        .then((res) => {
          if (res.data) {
            getTodos();
            setAction("");
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("input field required");
    }
  };

  const handleChange = (e) => {
    setAction(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={action} />
      <button onClick={addTodo}>add todo</button>
    </div>
  );
};

export default EventInput;

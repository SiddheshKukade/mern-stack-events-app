import React, { useState, useEffect } from "react";
import axios from "axios";

const EventInput = () => {
  const [action, setAction] = useState("");
  const addTodo = () => {
    const task = { action };
    if (task.action && task.action.length > 0) {
      axios
        .post("/api/todos", task)
        .then((res) => {
          if (res.data) {
            this.props.getTodos();
            this.setState({ action: "" });
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
      <input type="text" onChange={this.handleChange} value={action} />
      <button onClick={this.addTodo}>add todo</button>
    </div>
  );
};

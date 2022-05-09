import React, { useState } from "react";
import axios from "axios";

import styles from "./event.module.css";
import { Navigate } from "react-router-dom";

const EventInput = ({ getTodos }) => {
  const [next, setNext] = useState(false);
  const [Event, setEvent] = useState("");
  const addTodo = () => {
    const formData = { name: Event };
    if (formData.name && formData.name.length > 0) {
      axios
        .post("/api/events/create", formData)
        .then((res) => {
          setNext(true);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("input field required");
    }
  };
  const handleChange = (e) => {
    setEvent(e.target.value);
  };
  return (
    <div>
      {next ? <Navigate to="/home" replace /> : null}
      <h2 className={styles.title}>Enter the name of the Event</h2>
      <input
        type="text"
        onChange={handleChange}
        value={Event}
        placeholder="ex. Going to Party ! "
      />
      <button onClick={addTodo}>Add an Event</button>
    </div>
  );
};

export default EventInput;

import React, { useState, useEffect } from "react";
import axios from "axios";
import EventInput from "./EventInput";
import EventList from "./EventList";
import styles from "./event.module.css";
import { Navigate } from "react-router-dom";

const Event = () => {
  const [Event, setEvent] = useState([]);
  const [next, setNext] = useState(false);
  const [nextLogin, setNextLogin] = useState(false);
  const [nextSignup, setNextSignup] = useState(false);
  const getEvent = () => {
    axios
      .get("/api/events/show")
      .then((res) => {
        if (res.data) {
          setEvent(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const deleteEvent = (id) => {
    axios.delete(`/api/event/${id}`).then((res) => {
      if (res.data) {
        getEvent();
      }
    });
  };
  const addEvent = () => {
    setNext(true);
  };
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <div>
      {next ? <Navigate to="/add-event" replace /> : null}
      {nextLogin ? <Navigate to="/login" replace /> : null}
      {nextSignup ? <Navigate to="/create-an-account" replace /> : null}
      {/* <Count />
      <EventInput getEvent={() => getEvent()} /> */}
      <h1 className={styles.title}>List of Event(s)</h1>
      <button className={styles.btn} onClick={addEvent}>
        Add an Event
      </button>
      <br/>
      <button className={styles.btn}onClick={()=>setNextLogin(true)}>
        Login
      </button>
      <button className={styles.btn} onClick={()=>setNextSignup(true)}>
        Create Account
      </button>
      <EventList Event={Event} deleteTodo={(id) => deleteEvent(id)} />
      
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

import React from "react";
import styles from "./Signup.module.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [next, setNext] = useState(false);

  // addTodo = () => {
  //     const task = { action: this.state.action };

  //     if (task.action && task.action.length > 0) {
  //       axios
  //         .post("/api/todos", task)
  //         .then((res) => {
  //           if (res.data) {
  //             this.props.getTodos();
  //             this.setState({ action: "" });
  //           }
  //         })
  //         .catch((err) => console.log(err));
  //     } else {
  //       console.log("input field required");
  //     }
  //   };
  const handleSubmit = () => {
    const formData = { username: username, password: password, email: email };
    if (username && password && email) {
      axios
        .post("/api/users/create", formData)
        .then((res) => {
          console.log("response ot the signup" + res.data);
          if (res.data.sucess) {
            setNext(true);
          }
        })
        .catch((err) => console.log("Error at Signup " + err));
    }
  };
  return (
    <>
      {next ? <Navigate to="/home" replace /> : null}

      <Helmet>
        <meta charSet="utf-8" />
        <title>Signup - Events App </title>
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Signup Form (with password hashing and encryption provided on the
          backend){" "}
        </h1>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <input
          type="emmail"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <br />
        <button onClick={handleSubmit}>Create an Account</button>
      </div>
    </>
  );
};
export default Signup;

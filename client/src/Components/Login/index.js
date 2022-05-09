import React from "react";
import styles from "./login.module.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [next, setNext] = useState(false);
  const handleSubmit = () => {
    const formData = { username: username, password: password };
    if (username && password) {
      axios.post("/api/users/verify", formData).then((res) => {
        console.log("response ot the signup" + res.data);
        if (res.data.sucess) {
          setNext(true);
        }
      });
    }
  };

  return (
    <>
      {next ? <Navigate to="/home" replace /> : null}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login - Events App </title>
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>Login Form </h1>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
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
        <button onClick={handleSubmit}>Login </button>
      </div>
    </>
  );
};
export default Login;

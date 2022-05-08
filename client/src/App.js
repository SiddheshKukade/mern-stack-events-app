import React from 'react';
import './App.css';
import Todo from './Components/Todo';
import {Helmet} from "react-helmet";
import { Routes, Route, Navigate } from "react-router-dom"
import Input from './Components/Input';
const App = () => {
  return (
    <div className="App">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Events App </title>
            </Helmet>
            <Routes>
        <Route path="home" element={ <Todo/> } />
        <Route path="404" element={ <h1>The Page is not found on the app. You are lost :-)</h1> } />
         
     
        <Route
        path="/"
        element={<Navigate to="/home" replace />}
    />
       <Route
        path="*"
        element={<Navigate to="/404" replace />}
    />
      </Routes>
    </div>
  );
};

export default App;
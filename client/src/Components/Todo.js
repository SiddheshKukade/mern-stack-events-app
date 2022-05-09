import React, { Component } from "react";
import axios from "axios";
import Input from "./Input";
import ListTodo from "./ListTodo";
import EventInput from "../Components/Event/EventInput";
class Todo extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios
      .get("/api/todos")
      .then((res) => {
        console.log("data is ", res.data);
        if (res.data) {
          this.setState({
            todos: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteTodo = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        if (res.data) {
          this.getTodos();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { todos } = this.state;
    console.log("data is tods ", todos);

    return (
      <div>
        <h1> Not My Todo(s)</h1>
        <EventInput getTodos={this.getTodos} />
        <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Todo;

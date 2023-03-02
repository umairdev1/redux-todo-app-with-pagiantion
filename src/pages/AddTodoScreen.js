import React from "react";
import { NavLink } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const AddTodoScreen = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <NavLink to="/todo">Go to todo page</NavLink>
    </div>
  );
};

export default AddTodoScreen;

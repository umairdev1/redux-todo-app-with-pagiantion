import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../actions/TodoActions";

function Todo({ todo, index }) {
  const dispatch = useDispatch();
  console.log("ren");
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => dispatch(toggleTodo(index))}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
    </div>
  );
}

export default Todo;

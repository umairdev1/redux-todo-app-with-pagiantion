import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} />
      ))}
    </div>
  );
}

export default TodoList;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../actions/TodoActions";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "./table.css";

function TodoScreen() {
  const todoList = useSelector((state) => state.todos);
  const [currentPageUncompleted, setCurrentPageUncompleted] = useState(1);
  const [todosPerPageUncompleted] = useState(5);
  const [currentPageCompleted, setCurrentPageCompleted] = useState(1);
  const [todosPerPageCompleted] = useState(5);

  const indexOfLastTodoCompleted = currentPageCompleted * todosPerPageCompleted;
  const indexOfFirstTodoCompleted =
    indexOfLastTodoCompleted - todosPerPageCompleted;

  const indexOfLastTodoUnCompleted =
    currentPageUncompleted * todosPerPageUncompleted;
  const indexOfFirstTodoUncompleted =
    indexOfLastTodoUnCompleted - todosPerPageUncompleted;

  const uncompletedTodos = todoList
    .filter((todo) => !todo.completed)
    .slice(indexOfFirstTodoUncompleted, indexOfLastTodoUnCompleted);
  const completedTodos = todoList
    .filter((todo) => todo.completed)
    .slice(indexOfFirstTodoCompleted, indexOfLastTodoCompleted);

  const paginateUncompleted = (pageNumber) =>
    setCurrentPageUncompleted(pageNumber);
  const paginateCompleted = (pageNumber) => setCurrentPageCompleted(pageNumber);

  const dispatch = useDispatch();

  const pageNumbersUncompleted = [];
  for (
    let i = 1;
    i <= Math.ceil(todoList.length / todosPerPageUncompleted);
    i++
  ) {
    pageNumbersUncompleted.push(i);
  }
  const pageNumbersCompleted = [];
  for (
    let i = 1;
    i <= Math.ceil(todoList.length / todosPerPageCompleted);
    i++
  ) {
    pageNumbersCompleted.push(i);
  }

  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Completed">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Todo</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {completedTodos.map((todo, index) => (
              <tr>
                <td>
                  {index +
                    1 +
                    (currentPageCompleted - 1) * todosPerPageCompleted}
                </td>
                <td>{todo.text}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch(removeTodo(indexOfFirstTodoCompleted + index))
                    }
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          {pageNumbersCompleted.map((number) => (
            <Pagination.Item
              key={number}
              active={number === currentPageCompleted}
              onClick={() => paginateCompleted(number)}
            >
              {number}
            </Pagination.Item>
          ))}
        </Pagination>
      </Tab>
      <Tab eventKey="profile" title="Uncompleted">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Todo</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {uncompletedTodos.map((todo, index) => (
              <tr>
                <td>
                  {index +
                    1 +
                    (currentPageUncompleted - 1) * todosPerPageUncompleted}
                </td>
                <td>{todo.text}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch(removeTodo(indexOfFirstTodoUncompleted + index))
                    }
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          {pageNumbersUncompleted.map((number) => (
            <Pagination.Item
              key={number}
              active={number === currentPageUncompleted}
              onClick={() => paginateUncompleted(number)}
            >
              {number}
            </Pagination.Item>
          ))}
        </Pagination>
      </Tab>
    </Tabs>
  );
}

export default TodoScreen;

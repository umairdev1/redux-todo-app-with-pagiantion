import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodoScreen from "./pages/AddTodoScreen";
import TodoScreen from "./pages/TodoScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddTodoScreen />}></Route>
        <Route path="/todo" element={<TodoScreen />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

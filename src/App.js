import React from "react";
import TodoSearch from "./Component/TodoSearch";
import { Routes, Route } from "react-router-dom";
import SecTodo from "./Component/SecTodo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoSearch />}></Route>
        <Route path="/SecTodo" element={<SecTodo />}></Route>
      </Routes>
    </>
  );
};

export default App;

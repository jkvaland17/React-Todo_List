import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.scss";

let img = "https://picsum.photos/200/300";

const TodoSearch = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  let hendelsubmit = () => {
    input === "" ? alert("Please Enter Items") : list.push(input);
    localStorage.setItem("list", JSON.stringify(list));
    setInput("");
  };

  const handleDelete = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <>
      <div className="main_box">
        <h1>Todo App</h1>
        <div className="serch_bar">
          <input
            className="input_val"
            type="Text"
            placeholder="Enter Item..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={hendelsubmit}>+</button>
        </div>
        <div className="todo_show">
          {list.map((item, index) => (
            <div className="todo_box">
              <div key={index}>
                <img src={img} alt="img"></img>
                <br></br>
                <h3 className="text">
                  <NavLink to="/SecTodo">{item}</NavLink>
                </h3>
                <button
                  className="item_btn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoSearch;

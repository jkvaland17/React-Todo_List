import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.scss";

let img = "https://picsum.photos/200/300";

//const items = JSON.parse(localStorage.getItem("list"));

const TodoSearch = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("list"));
    if (items) {
      setItems(items);
    }
  }, [input]);

  let hendelsubmit = (e) => {
    input === "" ? alert("Please Enter Items") : list.push(input);
    setInput("");
    e.preventDefault();

    localStorage.setItem("list", JSON.stringify(list));
  };

  const handleDelete = (index) => {
    items.splice(index, 1);
    setList([...items]);
    localStorage.setItem("list", JSON.stringify([...items]));
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
        {items == null ? (
          <h1>value note asigned</h1>
        ) : (
          <div className="todo_show">
            {items.map((item, index) => (
              <div className="todo_box">
                <div key={index}>
                  <img src={img} alt="img"></img>
                  <br></br>
                  <h3 className="text">
                    <NavLink to="/SecTodo" key={index}>
                      {item}
                    </NavLink>
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
        )}
      </div>
    </>
  );
};

export default TodoSearch;

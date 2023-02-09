import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThTodo from "./ThTodo";
const SecTodo = () => {
  const [secTodo, setSecTodo] = useState("");
  const [secStore, setsecStore] = useState([]);
  let listData = localStorage.getItem("list");
  let oldData = JSON.parse(listData);

  //main todo start
  let sechendelsubmit = () => {
    if (secTodo === "") {
      alert("Please Enter Items");
    } else {
      secStore.push(secTodo);
      setSecTodo("");
    }
  };

  const sechandleDelete = (id) => {
    secStore.splice(id, 1);
    setsecStore([...secStore]);
  };
  //main todo end
  return (
    <>
      <div>
        <h1>{oldData}</h1>
        <div className="main_box">
          <div className="serch_bar">
            <input
              className="input_val"
              type="Text"
              placeholder="Enter Item..."
              value={secTodo}
              onChange={(e) => setSecTodo(e.target.value)}
            />
            <button onClick={sechendelsubmit}>+</button>
          </div>
          <div className="todo_show">
            {secStore.map((secitem, id) => (
              <div className="todo_box">
                <div key={id}>
                  <br></br>
                  <h3 className="text">
                    {/* nested todo start */}
                    <ThTodo />
                    <p>{secitem}</p>
                    {/* nested todo End */}
                  </h3>
                  <button
                    className="item_btn"
                    onClick={() => sechandleDelete(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button className="back_btn">
            <NavLink to="/">Back</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default SecTodo;

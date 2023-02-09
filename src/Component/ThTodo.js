import React, { useState } from "react";

const ThTodo = () => {
  const [thTodo, setThTodo] = useState("");
  const [thStore, setthStore] = useState([]);
  //nested todo start
  let thchange = () => {
    if (thTodo === "") {
      alert("Please Enter Items");
    } else {
      thStore.push(thTodo);
      setThTodo("");
    }
  };
  let thdel = (id) => {
    thStore.splice(id, 1);
    setthStore([...thStore]);
  };
  //nested todo end
  return (
    <div>
      {/* nested todo start */}
      <input
        type="text"
        placeholder="Enter Item.."
        value={thTodo}
        onChange={(e) => setThTodo(e.target.value)}
      />
      <button onClick={thchange}>+</button>
      <div className="th_show">
        {thStore.map((thitem, index) => {
          return (
            <div className="thtodo_box">
              <div key={index}>
                <span>{thitem}</span>
              </div>
              <button onClick={()=>thdel(index)}>X</button>
            </div>
          );
        })}
      </div>
      {/* nested todo End */}
    </div>
  );
};

export default ThTodo;

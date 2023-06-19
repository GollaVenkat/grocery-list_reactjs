import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }
  function addList() {
    setList((prevItems) => {
      return [...prevItems, item];
    });
    console.log(list);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((it) => {
            return <li>{it}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

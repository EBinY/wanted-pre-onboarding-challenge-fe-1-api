import { useState, useMemo } from "react";

// import TodoBoard from "./TodoBoard";
// createContext로 입력된 todoItem을 TodoBoard로 전달해야함

function TopBar() {
  // const [inputValue, setInputValue] = useState("");
  // const [todoList, setTodoList] = useState([]);

  // const addItem = () => {
  //   setTodoList([...todoList, inputValue]);
  // };

  return (
    <div>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>ADD</button>
      {/* <TodoBoard todoList={todoList} /> */}
    </div>
  );
}

export default TopBar;

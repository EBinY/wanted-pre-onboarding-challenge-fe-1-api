import { createContext, useState } from "react";

import TopBar from "../components/TopBar";
import TodoBoard from "../components/TodoBoard";
import TodoItem from "../components/TodoItem";

export const TodoContext = createContext({
  todoItem: () => {},
});

function Home() {
  // home에서 관리하고 props로 내려주는 방식으로 변경
  // topbar 고민중,
  const [todoItem, setTodoItem] = useState("");

  return (
    <TodoContext.Provider value={todoItem}>
      <div>
        <TopBar />
        <TodoBoard />
        <TodoItem />
      </div>
    </TodoContext.Provider>
  );
}

export default Home;

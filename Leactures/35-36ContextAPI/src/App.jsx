// Importing required components and hooks
import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/todoItems";
import "./App.css";
import { useReducer } from "react";
import WelcomeMessage from "./Component/WelcomeMessage";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";


function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;


import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/todoItems";
import "./App.css"
import { useState } from "react";
import WelcomeMessage from "./Component/WelcomeMessage";
function App() {

  const initialTodoItems =[ 
    // {
    //   name: "Buy Milk",
    //   dueDate: "4/10/25",
    // },
    // {
    //   name: "Go to Gym",
    //   dueDate: "4/10/25",
    // },

    // {
    //   name: "Go to College",
    //   dueDate: "4/10/25",
    // },

];

  const [todoItems,setToDoItems] = useState([]);

  const handleNewItem = (itemName,itemDueDate) => {
    const newTodoItems = [...todoItems, {
      name: itemName,  dueDate:itemDueDate}]; 
      setToDoItems(newTodoItems);
  }

  const handleDeleteItem = (todoName) => {
    // console.log("Delete Item:", todoName);
    const newTodoItems = todoItems.filter(item => item.name !== todoName);
    setToDoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem = {handleNewItem}></AddTodo>
      {todoItems.length==0 && <WelcomeMessage ></WelcomeMessage>}
      <TodoItems todoItem={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;

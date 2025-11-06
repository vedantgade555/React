import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/todoItems";
import "./App.css"
function App() {

  const todoItem =[ 
    {
      name: "Buy Milk",
      dueDate: "4/10/25",
    },
    {
      name: "Go to Gym",
      dueDate: "4/10/25",
    },

    {
      name: "Go to College",
      dueDate: "4/10/25",
    },

]

  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItem={todoItem}></TodoItems>
    </center>
  );
}

export default App;

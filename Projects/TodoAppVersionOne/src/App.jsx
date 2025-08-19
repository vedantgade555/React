import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItem1 from "./Component/TodoItem1";
import TodoItem2 from "./Component/TodoItem2";
import "./App.css"
function App() {
  return (
    <center class="todo-container">
     <AppName></AppName>
      <div class="container text-container">
        
        <AddTodo></AddTodo>
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
        
      </div>
    </center>
  );
}

export default App;

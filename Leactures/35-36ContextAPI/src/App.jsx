// Importing required components and hooks
import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/todoItems";
import "./App.css";
import { useReducer } from "react";
import WelcomeMessage from "./Component/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

// Reducer function to manage all Todo list actions
const todoItemsReducer = (currentTodoItems, action) => {
  switch (action.type) {
    // When a new item is added
    case "NEW_ITEM":
      return [
        ...currentTodoItems, // Keep old todos
        {
          name: action.payload.itemName,
          dueDate: action.payload.itemDueDate,
        },
      ];

    // When an item is deleted
    case "DELETE_ITEM":
      return currentTodoItems.filter(
        (item) => item.name !== action.payload.todoName
      );

    // Default case (no change)
    default:
      return currentTodoItems;
  }
};

function App() {
  // Initial empty todo list
  const initialTodoItems = [];

  // useReducer to handle todo actions (add/delete)
  const [todoItems, dispatchTodoItems] = useReducer(
    todoItemsReducer,
    initialTodoItems
  );

  // Function to add a new item
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDueDate: itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction); // Send action to reducer
  };

  // Function to delete a specific item
  const deleteItem = (todoName) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName: todoName,
      },
    };

    dispatchTodoItems(deleteAction); // Send delete action to reducer
  };

  return (
    // Providing todoItems, addNewItem, and deleteItem to all components
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {/* Main layout */}
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

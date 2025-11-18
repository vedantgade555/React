import { createContext, useReducer } from "react";

// Reducer function to manage all Todo list actions
const todoItemsReducer = (currentTodoItems, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      return [
        ...currentTodoItems,
        {
          name: action.payload.itemName,
          dueDate: action.payload.itemDueDate,
        },
      ];

    case "DELETE_ITEM":
      return currentTodoItems.filter(
        (item) => item.name !== action.payload.todoName
      );

    default:
      return currentTodoItems;
  }
};

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(
    todoItemsReducer,
    []
  );

  const addNewItem = (itemName, itemDueDate) => {
    dispatchTodoItems({
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    });
  };

  const deleteItem = (todoName) => {
    dispatchTodoItems({
      type: "DELETE_ITEM",
      payload: { todoName },
    });
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;

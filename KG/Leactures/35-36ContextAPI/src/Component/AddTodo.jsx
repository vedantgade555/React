import { useState, useRef, useContext } from "react"; // ✅ Added useContext
import { IoAddCircleSharp } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();

  // Handles form submission
  const handleAddClick = (event) => {
    event.preventDefault(); // Prevents page refresh

    const todoName = todoNameElement.current.value;
    const dueDate = todoDueDateElement.current.value;

    // Simple validation
    if (!todoName.trim() || !dueDate.trim()) return;

    // Add new todo
    addNewItem(todoName, dueDate);

    // Clear inputs
    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";
  };

  return (
    <div className="container text-center mt-4">
      <form
        className="row g-3 align-items-center justify-content-center shadow-sm p-3 rounded-4 bg-light"
        onSubmit={handleAddClick}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* Todo Name Input */}
        <div className="col-md-6">
          <input
            type="text"
            ref={todoNameElement}
            className="form-control"
            placeholder="Enter Todo Here"
          />
        </div>

        {/* Due Date Input */}
        <div className="col-md-4">
          <input
            type="date"
            ref={todoDueDateElement}
            className="form-control"
          />
        </div>

        {/* Submit Button */}
        <div className="col-md-2 d-grid">
          <button
            type="submit"
            className="btn btn-success d-flex align-items-center justify-content-center gap-2"
          >
            <IoAddCircleSharp size={22} />
            <span>Add</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

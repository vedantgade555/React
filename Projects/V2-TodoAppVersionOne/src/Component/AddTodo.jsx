import { useState, useRef } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  // Using refs instead of state (no re-renders when typing)
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();

  // If you used useState, you could track and log updates like this:
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleDueDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log("noOfUpdates are:  ", noOfUpdates.current);
  // };

  // Handles form submission
  const handleAddClick = (event) => {
    event.preventDefault(); // Prevents page refresh on form submit

    // Getting values from input elements using refs
    const todoName = todoNameElement.current.value;
    const dueDate = todoDueDateElement.current.value;

    console.log("Todo Name:", todoName);
    console.log("Due Date:", dueDate);

    // Simple validation check
    if (!todoName.trim() || !dueDate.trim()) return;

    // Pass new todo item data to parent component
    onNewItem(todoName, dueDate);

    // Clear the inputs after adding
    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";

    // For state-based version:
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container text-center mt-4">
      {/* Form container with Bootstrap styling */}
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
            // onChange={handleNameChange}
            // value={todoName}
          />
        </div>

        {/* Due Date Input */}
        <div className="col-md-4">
          <input
            type="date"
            ref={todoDueDateElement}
            className="form-control"
            // onChange={handleDueDateChange}
            // value={dueDate}
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

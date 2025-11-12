import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddClick = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here"
          onChange={handleNameChange}
          value={todoName}
        />
      </div>
      <div className="col-4">
        <input type="date" onChange={handleDueDateChange} value={dueDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success vgbtn"
          onClick={handleAddClick}
        >
          {/* ADD */}
          <IoAddCircleSharp size={25} />
        </button>
      </div>
    </div>
  );
}

export default AddTodo;

import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoName, todoDate }) {
  const {deleteItem} = useContext(TodoItemsContext)
  return (
    <div className="row vgrow mt-2">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          className="btn btn-danger vgbtn"
          onClick={() => deleteItem(todoName)}
        >
          {/* Delete */}
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

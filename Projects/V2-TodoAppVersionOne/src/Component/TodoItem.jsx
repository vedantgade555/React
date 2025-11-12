import { MdDeleteOutline } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="row vgrow mt-2">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          className="btn btn-danger vgbtn"
          onClick={() => onDeleteClick(todoName)}
        >
          {/* Delete */}
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

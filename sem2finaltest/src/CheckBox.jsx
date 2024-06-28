/* eslint-disable react/prop-types */
import "./Checkbox.css";

export default function CheckBox({ toDoItem, setItemList, toggleItemStatus }) {
  const deleteItem = (id) => {
    setItemList((currentItemList) => {
      return currentItemList.filter((item) => item.id !== toDoItem.id);
    });
  };
  const handleChange = () => {
    toggleItemStatus(toDoItem.id);
  };
  return (
    <div className="checkbox-section">
      <input
        className="checkbox-box"
        type="checkbox"
        id={toDoItem.id}
        checked={toDoItem.status === "completed"}
        onChange={handleChange}
      />
      <label className="checkbox-value" htmlFor={toDoItem.id}>
        {toDoItem.value}
      </label>
      <span className="btn-sm checkbox-btn">
        <button onClick={() => deleteItem(toDoItem.id)}>Delete</button>
      </span>
    </div>
  );
}
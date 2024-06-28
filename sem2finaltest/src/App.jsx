import "./App.css";
import { useState } from "react";
import CheckBox from "./CheckBox";

function App() {
  // States, hooks
  const [tab, setTab] = useState("all");
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState([
    {
      id: 1,
      value: "Go to school",
      status: "active",
    },
    {
      id: 2,
      value: "Wake up",
      status: "completed",
    },
  ]);

  // Helper functions
  function addItem() {
    // if no item typed in
    if (!input) {
      alert("Please enter something in the box");
      return;
    }

    const newItemId =
      itemList.length > 0 ? itemList[itemList.length - 1].id + 1 : 1;
    const item = {
      id: newItemId,
      value: input,
      status: "active",
    };

    setItemList((itemList) => [...itemList, item]);
    setInput("");
  }

  const toggleItemStatus = (itemId) => {
    setItemList((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              status: item.status === "completed" ? "active" : "completed",
            }
          : item
      )
    );
  };

  return (
    <>
      <div className="App">
        {/* 1. Header */}
        <h1>#todo</h1>
        <div className="app-add-detail-section">
          <button
            className="btn-lg app-btn-title"
            onClick={() => setTab("all")}
            style={{ color: tab === "all" ? "blue" : "black" }}
          >
            All
          </button>

          <button
            className="btn-lg app-btn-title"
            onClick={() => setTab("active")}
            style={{ color: tab === "active" ? "blue" : "black" }}
          >
            Active
          </button>

          <button
            className="btn-lg app-btn-title"
            onClick={() => setTab("completed")}
            style={{ color: tab === "completed" ? "blue" : "black" }}
          >
            Completed
          </button>
          <br />
          <br />
        </div>
        <div className="">
          {tab !== "completed" && (
            <div>
              <input
                type="text"
                className="app-add-detail-input"
                placeholder="add detail"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="btn-sm app-add-detail-btn" onClick={addItem}>
                Add
              </button>
              <br />
            </div>
          )}
        </div>

        <div className="check-box">
          {itemList
            ?.filter((item) => {
              if (tab === "all") {
                return true;
              } else if (tab === "active") {
                return item.status === "active";
              } else if (tab === "completed") {
                return item.status === "completed";
              }
            })
            .map((item) => {
              return (
                <CheckBox
                  key={item.id}
                  toDoItem={item}
                  setItemList={setItemList}
                  itemList={itemList}
                  toggleItemStatus={toggleItemStatus}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;

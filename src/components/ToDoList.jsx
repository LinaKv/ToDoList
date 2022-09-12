import React from "react";
import ListItem from "./ListItem";

function ToDoList({ task }) {
  if (!task || task.length === 0) {
    return <p>No Task Yet</p>;
  }

  return (
    <div className="flex flex-col mb-5 mt-5">
      {task.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ToDoList;

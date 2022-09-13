import React from "react";
import ListItem from "./ListItem";

function ToDoList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <p>No Task Yet</p>;
  }

  return (
    <div className="flex flex-col mb-5 mt-5">
      {tasks.map((item) => (
        <ListItem key={item.id} item={item} date={item.date} />
      ))}
    </div>
  );
}

export default ToDoList;

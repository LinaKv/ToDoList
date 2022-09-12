import React from "react";
import { useState } from "react";

function ListItem({ item }) {
  const [task, setTask] = useState(item);
  const [made, setMade] = useState(false);

  const onClick = () => {
    setMade(true);
  };

  if (!made) {
    return (
      <div className="flex flex-row mb-6 mt-5">
        <input type="checkbox" className="checkbox" onClick={onClick} />
        <div className="text ml-2">{task.text}</div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row mb-6 mt-5">
        <input type="checkbox" className="checkbox" disabled />
        <div className="text ml-2 text-slate-400">{task.text}</div>
      </div>
    );
  }
}

export default ListItem;

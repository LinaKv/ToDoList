import React from "react";
import { useState } from "react";

function ListItem({ item }) {
  const [task, setTask] = useState(item);
  const [made, setMade] = useState(false);

  const onClick = () => {
    setMade(true);
  };

  console.log(task);

  if (!made) {
    return (
      <div className="flex flex-row mb-6 mt-5">
        <input type="checkbox" className="checkbox" onClick={onClick} />
        <div className="flex justify-between w-full ">
          <div className="text ml-2">{task.text}</div>
          <div className="text ml-2 text-slate-400">{task.date}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row mb-6 mt-5">
        <input type="checkbox" className="checkbox" disabled />
        <div className="flex justify-between w-full">
          <div className="text ml-2 text-slate-400">{task.text}</div>
          <div className="text ml-2 text-slate-400">{task.date}</div>
        </div>
      </div>
    );
  }
}

export default ListItem;

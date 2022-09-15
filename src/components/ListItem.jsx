import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../store/index";

function ListItem({ item }) {
  const [task, setTask] = useState(item);
  const [made, setMade] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    setMade(true);
  };

  const deleteTask = () => {
    dispatch(taskActions.deleteTask(item));
  };

  if (!made) {
    return (
      <div className="flex flex-row mb-6 mt-5">
        <input type="checkbox" className="checkbox" onClick={onClick} />
        <div className="flex justify-between w-full ">
          <div className="text ml-2">{task.text}</div>
          <div className="text ml-2 text-slate-400">{task.date}</div>
          <button className="btn btn-square" onClick={deleteTask}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
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

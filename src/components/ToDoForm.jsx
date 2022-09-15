import React from "react";
import { useState } from "react";
import { getStrDate } from "../config/setting";
import { useDispatch } from "react-redux";
import { taskActions } from "../store/index";

function ToDoForm({ handleAdd }) {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text,
      date: getStrDate(),
    };
    // handleAdd(newTask);
    dispatch(taskActions.addTask(newTask));
    setText("");
  };

  const deleteAllTasks = (e) => {
    dispatch(taskActions.deleteAllTasks());
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <input
            type="text"
            className="w-4/5 bg-white input input-lg text-black flex-1"
            placeholder="What are you gonna do?"
            value={text}
            onChange={handleChange}
          />
          <button type="submit" className="btn  w-36 btn-lg flex-none ">
            Add
          </button>
        </div>
      </form>
      <button className="btn btn-block mt-5 mb-5" onClick={deleteAllTasks}>
        DELETE ALL NEW TASKS
      </button>
    </div>
  );
}

export default ToDoForm;

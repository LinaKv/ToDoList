import React from "react";
import { useState } from "react";
import { getStrDate } from "../config/setting";

function ToDoForm({ handleAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      text,
      date: getStrDate(),
    };
    handleAdd(newTask);
    console.log(newTask);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          className="w-4/5 bg-lime-50 input input-lg text-black flex-1"
          placeholder="What are you gonna do?"
          value={text}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn  w-36 btn-lg flex-none bg-lime-500 border-white"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default ToDoForm;

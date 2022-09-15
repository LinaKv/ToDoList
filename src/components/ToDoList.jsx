import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../store/index";

function ToDoList() {
  const tasksFromStore = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskActions.addTaskFromLocalStorage());
  }, []);

  if (!tasksFromStore || tasksFromStore.length === 0) {
    return <p>No Task Yet</p>;
  }

  return (
    <div className="flex flex-col mb-5 mt-5">
      {tasksFromStore.map((item) => (
        <ListItem key={item.id} item={item} date={item.date} />
      ))}
    </div>
  );
}

export default ToDoList;

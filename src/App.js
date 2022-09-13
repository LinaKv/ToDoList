import "./App.css";
import ToDoForm from "./components/ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import { INITIAL_TASK_DATA } from "./data/task";
import { setLocalStorage, getLocalStorage } from "./config/setting";

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASK_DATA);

  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTasks([newTask, ...tasks]);
    setLocalStorage(newTask.id, newTask);
  };

  useEffect(() => {
    const newTasks = getLocalStorage();
    setTasks([...newTasks, ...tasks]);
  }, []);

  return (
    <div className="container mx-auto px-4 bg-lime-100 w-2/3 h-2/3 ">
      <div className="flex flex-col">
        <div className="text-center">What you have to do</div>
        <ToDoList tasks={tasks} />
        <ToDoForm handleAdd={addTask} />;
      </div>
    </div>
  );
}

export default App;

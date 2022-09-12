import "./App.css";
import ToDoForm from "./components/ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import ListData from "./data/task";

function App() {
  const [task, setTask] = useState(ListData);

  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTask([newTask, ...task]);
  };

  return (
    <div className="container mx-auto px-4 bg-lime-100 w-2/3 h-2/3 ">
      <div className="flex flex-col">
        <div className="text-center">What you have to do</div>
        <ToDoList task={task} />
        <ToDoForm handleAdd={addTask} />;
      </div>
    </div>
  );
}

export default App;

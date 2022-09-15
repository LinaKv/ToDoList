import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="px-4 bg-slate-50 w-full">
      <div className="flex flex-col">
        <div className="text-center">What you have to do</div>
        <ToDoList />
        <ToDoForm />
        {/* handleAdd={addTask} */}
      </div>
    </div>
  );
}

export default App;

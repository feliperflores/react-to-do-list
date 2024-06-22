import { useState } from "react";
import TaskList from "./TaskList/TaskList";
import AddTaskForm from "./AddTaskForm";

export type Task = {
  name: string;
  timestamp: number;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addNewTask = (newTask: Task) => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <div className="bg-violet-800">
      <AddTaskForm onAddNewTask={addNewTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const addNewTask = (newTask: string) => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <div>
      <TaskInput addNewTask={addNewTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;

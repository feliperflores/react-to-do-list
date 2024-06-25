import { Task } from "../App";
import TaskItem from "./TaskItem";

type TaskProps = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
};

function TaskList({ tasks, setTasks }: TaskProps) {
  const onRemoveTask = (timestamp: number) => {
    setTasks(tasks.filter((task) => task.timestamp !== timestamp));
  };

  return (
    <ul className="flex flex-wrap m-3">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onRemoveTask={() => onRemoveTask(task.timestamp)}
        />
      ))}
    </ul>
  );
}

export default TaskList;

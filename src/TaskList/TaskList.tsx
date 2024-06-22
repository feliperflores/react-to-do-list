import { FormEvent } from "react";
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
  const onItemAdded = (event: FormEvent<HTMLUListElement>) => {
    event.currentTarget.animate(
      [
        {
          transition: "scale(0)",
        },
        {
          transition: "scale(1)",
        },
      ],
      {
        duration: 400,
      }
    );
  };

  return (
    <ul className="flex flex-wrap m-3" onChange={(event) => onItemAdded(event)}>
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

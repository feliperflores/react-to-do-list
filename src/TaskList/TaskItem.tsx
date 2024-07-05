import { useEffect, useRef } from "react";
import { Task } from "../App";
import TrashIcon from "./TrashIcon";
import { animateDeletion } from "./animateDeletion";
import { animateCreation } from "./animateCreation";
import TaskCheckbox from "./TaskCheckbox";

type TaskProps = {
  task: Task;
  onRemoveTask: () => void;
};

function TaskItem({ task, onRemoveTask }: TaskProps) {
  const listItem = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const addedItem = listItem.current?.parentElement;
    if (!addedItem) return;

    animateCreation(addedItem.firstChild as HTMLLIElement);
  }, [listItem]);

  const onRemoveTaskWrapper = () => {
    if (!listItem.current) return;

    animateDeletion(listItem.current).addEventListener("finish", () => {
      onRemoveTask();
    });
  };

  return (
    <li
      ref={listItem}
      className="flex items-center border-black border-2 rounded grow m-1 p-1 pl-2 w-full bg-violet-500 hover:bg-violet-600 hover:-translate-y-px hover:cursor-pointer"
    >
      <TaskCheckbox name={task.name} />
      <TrashIcon height={20} width={20} onClick={() => onRemoveTaskWrapper()} />
    </li>
  );
}

export default TaskItem;

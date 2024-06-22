import { FormEvent, useRef } from "react";
import { Task } from "../App";
import TrashIcon from "./TrashIcon";
import { animateDeletion } from "./animateDeletion";

type TaskProps = {
  task: Task;
  onRemoveTask: () => void;
};

function TaskItem({ task, onRemoveTask }: TaskProps) {
  const listItem = useRef<HTMLLIElement>(null);
  const onRemoveTaskWrapper = (listItem: HTMLLIElement | null) => {
    if (!listItem) {
      return;
    }
    animateDeletion(listItem).addEventListener("finish", () => {
      onRemoveTask();
    });
  };

  return (
    <li
      ref={listItem}
      className="flex justify-between border-black border-2 rounded grow m-1 p-1 pl-2 w-full bg-violet-500 hover:bg-violet-600 hover:-translate-y-px hover:cursor-pointer"
    >
      {task.name}
      <TrashIcon
        height={20}
        width={20}
        onClick={() => onRemoveTaskWrapper(listItem.current)}
      />
    </li>
  );
}

export default TaskItem;

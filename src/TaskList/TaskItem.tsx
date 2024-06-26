import { useEffect, useRef } from "react";
import { Task } from "../App";
import TrashIcon from "./TrashIcon";
import { animateDeletion } from "./animateDeletion";
import { animateCreation } from "./animateCreation";

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
      className="flex items-center border-black border-2 rounded grow m-1 p-1 pl-2 w-full bg-violet-500 hover:bg-violet-600 hover:-translate-y-px hover:cursor-pointer"
    >
      <input
        type="checkbox"
        className="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-purple-300 checked:appearance-auto"
      />
      <div className="w-full flex justify-between items-center">
        <span className="break-all mx-2">{task.name}</span>
        <TrashIcon
          height={20}
          width={20}
          onClick={() => onRemoveTaskWrapper(listItem.current)}
        />
      </div>
    </li>
  );
}

export default TaskItem;

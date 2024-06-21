import { Task } from '../App';
import DeleteIcon from './trash.svg';

type TaskProps = {
  task: Task
  onRemoveTask: () => void
}

function TaskItem({task, onRemoveTask}: TaskProps) {
  return (
    <li
      className='flex justify-between border-black border-2 rounded grow m-1 p-1 pl-2 w-full hover:bg-gray-200 hover:-translate-y-px hover:cursor-pointer'
    >
      {task.name}
      <img
        onClick={() => onRemoveTask()}
        src={DeleteIcon}
        alt="Delete Item"
        height={20}
        width={20}
      />
    </li>
  );
}

export default TaskItem;

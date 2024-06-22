import { Task } from '../App';
import TrashIcon from './TrashIcon';

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
      <TrashIcon height={20} width={20} onClick={onRemoveTask}/>
    </li>
  );
}

export default TaskItem;

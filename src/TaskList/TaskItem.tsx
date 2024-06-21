import DeleteIcon from './trash.svg';

type TaskProps = {
  task: string
  id: number
  removeTask: (index: number) => void
}

function TaskItem({id, task, removeTask}: TaskProps) {
  return (
    <li
      className='flex justify-between border-black border-2 rounded grow m-1 p-1 pl-2 w-full hover:bg-gray-200 hover:-translate-y-px hover:cursor-pointer'
    >
      {task}
      <img
        onClick={() => removeTask(id)}
        src={DeleteIcon}
        alt="Delete Item"
        height={20}
        width={20}
      />
    </li>
  );
}

export default TaskItem;

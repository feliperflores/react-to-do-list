type TaskProps = {
  task: string
  id: number
}

function Task({task, id}: TaskProps) {
  return (
    <li
      key={id}
      className='border-black border-2 rounded grow m-1 p-1 pl-2 w-full hover:bg-gray-200 hover:-translate-y-px hover:cursor-pointer'
    >
      {task}
    </li>
  );
}

export default Task;

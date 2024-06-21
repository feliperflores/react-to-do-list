import Task from './Task';

type TaskListProps = {
  tasks: string[]
}

function TaskList({tasks}: TaskListProps) {
  return (
    <ul className='flex flex-wrap m-3'>
      {tasks.map((task, index) => <Task id={index} task={task} />)}
    </ul>
  );
}

export default TaskList;

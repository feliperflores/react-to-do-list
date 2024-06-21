import TaskItem from './TaskItem';

type TaskProps = {
  tasks: string[]
}

function TaskList({tasks}: TaskProps) {
  return (
    <ul className='flex flex-wrap m-3'>
      {tasks.map((task, index) => <TaskItem key={index} task={task} />)}
    </ul>
  );
}

export default TaskList;

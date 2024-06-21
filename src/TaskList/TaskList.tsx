import TaskItem from './TaskItem';

type TaskProps = {
  tasks: string[]
  setTasks: (tasks: string[]) => void
}

function TaskList({tasks, setTasks}: TaskProps) {
  const removeTask = (index: number) => {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <ul className='flex flex-wrap m-3'>
      {tasks.map((task, index) => <TaskItem key={index} id={index} task={task} removeTask={removeTask} />)}
    </ul>
  );
}

export default TaskList;

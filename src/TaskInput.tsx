import { useRef } from 'react';

type TaskInputProps = {
  addNewTask: (task: string) => void
}

function TaskInput({addNewTask}: TaskInputProps) {
  const taskName = useRef<HTMLInputElement>(null);
  const addNewTaskWrapper = (taskInput: HTMLInputElement | null) => {
    if (taskInput && taskInput.value) {
      addNewTask(taskInput.value);
    }
  }

  return (
    <div className='flex justify-center h-auto'>
      <input maxLength={120} ref={taskName} placeholder='Task name' className='m-5 border-2 border-black rounded p-1 pl-2 w-96'/>
      <button onClick={() => addNewTaskWrapper(taskName.current)} className='m-5 bg-gray-400 p-2 rounded hover:bg-gray-700'>Add Task</button>
    </div>
  );
}

export default TaskInput;

import { FormEvent } from "react";
import { Task } from "./App";

type AddTaskFormProps = {
  onAddNewTask: (task: Task) => void
}

function AddTaskForm({onAddNewTask}: AddTaskFormProps) {
  const onAddNewTaskWrapper = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');

    if (name) {
      onAddNewTask({timestamp: Date.now(), name: name.toString()});
    }
  }

  return (
    <form
      onSubmit={onAddNewTaskWrapper}
      className='flex justify-center h-auto'>
      <input
        name="name"
        required
        maxLength={120}
        placeholder='Task name'
        className='m-5 border-2 border-black rounded p-1 pl-2 w-96'/>
      <button
        type='submit'
        className='m-5 bg-gray-400 p-2 rounded hover:bg-gray-700'
      >Add Task</button>
    </form>
  );
}

export default AddTaskForm;

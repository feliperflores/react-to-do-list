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
      event.currentTarget.reset();
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
        autoComplete="off"
        placeholder='Task name'
        className='m-5 border-2 focus:bg-violet-600 border-black rounded p-1 pl-2 w-96 bg-violet-500 placeholder:text-gray-800 '/>
      <button
        type='submit'
        className='m-5 bg-violet-500 border-2 border-black rounded p-2 hover:bg-violet-600'
      >Add Task</button>
    </form>
  );
}

export default AddTaskForm;

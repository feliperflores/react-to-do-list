type TaskCheckboxProps = {
  name: string;
};

function TaskCheckbox({ name }: TaskCheckboxProps) {
  return (
    <div className="w-full flex items-center">
      <input
        type="checkbox"
        className="min-w-3.5 min-h-3.5 peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-purple-300 checked:appearance-auto"
      />
      <label className="break-all mx-2 peer-checked:line-through peer-checked:text-gray-600">
        {name}
      </label>
    </div>
  );
}

export default TaskCheckbox;

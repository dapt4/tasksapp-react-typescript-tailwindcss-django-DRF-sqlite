import { Link } from "react-router-dom";

export function Navigation(): JSX.Element {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h1 className="font-bolt text-3xl mb-4">TasksApp</h1>
      </Link>
      <Link to="/tasks-create">
        <button className="bg-indigo-500 px-3 py-2 rounded-lg">
          Create Task
        </button>
      </Link>
    </div>
  );
}

import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="border-2 max-w-md w-full p-6 rounded-md bg-white shadow-lg transition-transform transform hover:scale-105">
      <header className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
        <div className="flex ml-10 gap-x-2 items-center">
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-[10px] transition-colors hover:bg-red-600"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="bg-sky-500 text-white px-4 py-1 rounded-[10px] transition-colors hover:bg-sky-600"
          >
            Edit
          </Link>
        </div>
      </header>
      <p className="text-gray-600 mb-2">{task.description}</p>
      <p className="text-gray-500">{new Date(task.date).toLocaleString()}</p>
    </div>
  );
}

export default TaskCard;
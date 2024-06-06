import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";
import AsideBar from "../components/AsideBar";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-100 py-10">
        <h1 className="text-gray-800 text-2xl mb-4">No tasks</h1>
        <Link
          to="/add-task"
          className="bg-sky-500 text-white px-4 py-2 rounded-md inline-block"
        >
          Add Task
        </Link>
      </div>
    );
  }

  return (
    <div className="flex">
      <AsideBar isOpen={true} />
      <div className="flex flex-col items-center justify-center w-full bg-gray-100 py-10">
        <Link
          to="/add-task"
          className="bg-sky-500 text-white px-4 py-2 rounded-md mb-4 inline-block"
        >
          Add Task
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl p-4">
          {tasks.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TasksPage;
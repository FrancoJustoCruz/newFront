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
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-gray-800 text-2xl mb-4">No tasks</h1>
        <Link
          to="/add-task"
          className="bg-gray-500 text-white px-4 py-2 rounded-md inline-block"
        >
          Add Task
        </Link>
      </div>
    );
  }

  return (
    <>
    <AsideBar isOpen={true} />
    <div className="flex flex-col items-center justify-center">
      <Link
        to="/add-task"
        className="bg-gray-500 text-white px-4 py-2 rounded-md mb-4 inline-block"
      >
        Add Task
      </Link>
     
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </div>
    </>
  );
}

export default TasksPage;
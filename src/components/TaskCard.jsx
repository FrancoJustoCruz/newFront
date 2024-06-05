import { useTasks } from "../context/TasksContext"
import { Link } from "react-router-dom"

function TaskCard({task}) {
    const{deleteTask}=useTasks()
  return (
    <div className="border-2 max-w-md w-full p-10 rounded-md">
         <header className="flex justify-between">
         <h1 className="text-2xl font-bold">{task.title}</h1>
          <div className="flex ml-10 gap-x-2 items-center text-white">
          <button className="bg-red-500 px-2 py-1 rounded-[10px]" onClick={()=>{
            deleteTask(task._id)
          }}>delete</button>
          <Link to={`/tasks/${task._id}`} className="bg-blue-500 px-4 py-1 rounded-[10px]">edit</Link>
          </div>
         </header>
          <p className="text-slate-300">{task.description}</p>
          <p>{new Date(task.date).toLocaleString()}</p>
        </div>
  )
}

export default TaskCard
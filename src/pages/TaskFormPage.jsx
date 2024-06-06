import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  }, [params.id, getTask, setValue]);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/notas");
  });

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <label htmlFor="title" className="text-gray-800">
            Title
          </label>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <label htmlFor="description" className="text-gray-800">
            Description
          </label>
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md my-2"
          ></textarea>
          <button className="bg-indigo-500 text-white px-3 py-2 rounded-md">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
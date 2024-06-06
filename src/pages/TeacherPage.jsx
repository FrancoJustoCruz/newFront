import { Link } from "react-router-dom";
import AsideTeacher from "../components/AsideTeacher";
import HeaderTasks from "../components/HeaderTasks";
import { useTasks } from "../context/TasksContext";
import { useEffect } from "react";
// import TaskCard from "../components/TaskCard";
import CardTask from "../components/CardTask";

const TeacherPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      <div className="flex gap-0 bg-white max-md:flex-wrap">
        <AsideTeacher isOpen={true} />
        <main className="flex flex-col grow shrink-0 basis-0 w-fit">
          <section className="flex flex-col justify-center pb-16  ">
            <HeaderTasks />
            <section className="flex flex-col mt-6 self-center min-w-[1040px]">
              <header className="flex gap-5 py-2 max-w-full font-medium w-[1040px] justify-between max-md:flex-wrap">
                <div className="flex flex-col justify-center px-5">
                  <h1 className="text-sm tracking-normal leading-6 text-gray-500">
                    My Tasks Page
                  </h1>
                  <h2 className="mt-3.5 text-3xl tracking-tighter leading-10 text-neutral-800">
                    Tasks
                  </h2>
                </div>
                <div className="flex gap-2 justify-center my-auto text-sm tracking-normal leading-6 text-center">
                  <Link
                    to="/add-task"
                    className="px-5 pt-1.5 pb-2 text-white bg-sky-500 rounded-[7992px]"
                  >
                    Create New Task
                  </Link>
                </div>
              </header>
              <nav className="flex flex-col justify-center py-px mt-6 tracking-normal text-gray-500 border-b border-solid border-gray-500 border-opacity-20 max-md:max-w-full">
                <div className="flex gap-5 justify-between pl-10 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-center text-sm font-medium leading-6 whitespace-nowrap">
                    <span className="self-stretch my-auto border-b-4 border-sky-600">
                      Tasks
                    </span>
                    <span className="self-stretch my-auto">Documents</span>
                  </div>
                  <p className="self-start text-xs leading-6">5 tasks active</p>
                </div>
              </nav>
              <section className="flex flex-col justify-center mt-2 ml-10 max-w-full w-[248px] max-md:mt-10 max-md:ml-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-80 gap-y-6">
                  <CardTask
                    theme={"Descriptions"}
                    title={"Me in 30 seconds"}
                    description={
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore dolorem iusto id consequuntur saepe expedita maxime numquam qui similique harum"
                    }
                    date={"10/06/2024 - 20:00:00"}
                  />
                   <CardTask
                   
                    theme={"Colors"}
                    title={"Life in color"}
                    description={
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore dolorem iusto id consequuntur saepe expedita maxime numquam qui similique harum"
                    }
                    date={"10/06/2024 - 20:00:00"}
                  />
                   <CardTask
                    theme={"Verb to be"}
                    title={"We are talking..."}
                    description={
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore dolorem iusto id consequuntur saepe expedita maxime numquam qui similique harum"
                    }
                    date={"10/06/2024 - 20:00:00"}
                  />
                   <CardTask
                    theme={"Past"}
                    title={"My Vacations"}
                    description={
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore dolorem iusto id consequuntur saepe expedita maxime numquam qui similique harum"
                    }
                    date={"10/06/2024 - 20:00:00"}
                  />
                  <CardTask
                    theme={"Practice"}
                    title={"Call Center attention"}
                    description={
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore dolorem iusto id consequuntur saepe expedita maxime numquam qui similique harum"
                    }
                    date={"10/06/2024 - 20:00:00"}
                  />
                  {/* {tasks.map((task) => (
                    <TaskCard task={task} key={task._id} />
                  ))} */}
                </div>
              </section>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TeacherPage;

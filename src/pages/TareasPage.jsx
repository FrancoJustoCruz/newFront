import React, { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";
import AsideBar from "../components/AsideBar";

import VideoCard from "../components/VideoCard";
import { useVideos } from "../context/VideoContext";

function TareasPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  const { videos, getVideos } = useVideos();

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      <div className="flex gap-0 bg-white max-md:flex-wrap">
        <AsideBar isOpen={true} />
        <main className="flex flex-col grow shrink-0 basis-0 w-fit">
          <section className="flex flex-col justify-center pb-16">
            <section className="flex flex-col mt-6 self-center min-w-[1040px]">
              <header className="flex gap-5 py-2 max-w-full font-medium w-[1040px] justify-between max-md:flex-wrap">
                <div className="flex flex-col justify-center px-5">
                  <h1 className="text-sm tracking-normal leading-6 text-gray-500">
                    My Library
                  </h1>
                  <h2 className="mt-3.5 text-3xl tracking-tighter leading-10 text-neutral-800">
                    Tareas
                  </h2>
                </div>
                <div className="flex gap-2 justify-center my-auto text-sm tracking-normal leading-6 text-center">
                  <button className="pt-1.5 pr-5 pb-2 pl-5 border border-solid border-gray-500 border-opacity-30 rounded-[7992px] text-neutral-800">
                    New folder
                  </button>
                  <button className="px-5 pt-1.5 pb-2 text-white bg-sky-500 rounded-[7992px]">
                    New video
                  </button>
                </div>
              </header>
              <nav className="flex flex-col justify-center py-px mt-6 tracking-normal text-gray-500 border-b border-solid border-gray-500 border-opacity-20 max-md:max-w-full">
                <div className="flex gap-5 justify-between pl-10 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-center text-sm font-medium leading-6 whitespace-nowrap">
                    <span className="self-stretch my-auto border-b-4 border-sky-600">
                      Tareas
                    </span>
                    <span className="self-stretch my-auto">Archive</span>
                    <span className="self-stretch my-auto">Screenshots</span>
                  </div>
                  <p className="self-start text-xs leading-6">{videos.length} videos</p>
                </div>
              </nav>
              <section className="flex flex-col justify-center mt-2 ml-10 max-w-full w-[248px] max-md:mt-10 max-md:ml-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-64 gap-y-0.5">
                  {videos.map((video) => (
                    <VideoCard key={video._id} video={video} />
                  ))}
                </div>
              </section>
            </section>
          </section>
        </main>
      </div>
     
    </>
  );
}

export default TareasPage;
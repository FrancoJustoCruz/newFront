import React, { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import AsideBar from "../components/AsideBar";
import VideoCard from "../components/VideoCard";
import { useVideos } from "../context/VideoContext";

function MyVideosPage() {
  const { getTasks } = useTasks();
  const { videos, getVideos } = useVideos();

  useEffect(() => {
    getTasks();
    getVideos();
  }, []);

  return (
    <div className="flex gap-0 bg-white min-h-screen max-md:flex-wrap">
      <AsideBar isOpen={true} />
      <main className="flex flex-col grow shrink-0 basis-0 w-full p-4 items-center">
        <section className="flex flex-col mt-6 w-full max-w-4xl">
        <header className="flex gap-5 py-2 max-w-full font-medium w-[1040px] justify-between max-md:flex-wrap">
                <div className="flex flex-col justify-center px-5">
                  <h1 className="text-sm tracking-normal leading-6 text-gray-500">
                    My Library
                  </h1>
                  <h2 className="mt-3.5 text-3xl tracking-tighter leading-10 text-neutral-800">
                    Videos
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
          <nav className="flex justify-between items-center py-2 border-b border-gray-300 text-gray-500">
            <div className="flex gap-4 text-sm font-medium">
              <span className="border-b-2 border-blue-500 pb-1">Videos</span>
              <span>Archive</span>
              <span>Screenshots</span>
            </div>
            <p className="text-xs">{videos.length} videos</p>
          </nav>
          <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}

export default MyVideosPage;

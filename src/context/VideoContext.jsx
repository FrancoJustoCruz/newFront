/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {
  postVideo,
  getVideosRequest,
  deleteVideoRequest,
  getVideoRequest,
  updateVideoRequest,
} from "../api/videos";

const VideoContext = createContext();

export const useVideos = () => {
  const context = useContext(VideoContext);

  if (!context) {
    throw new Error("useVideos must be used within VideoProvider");
  }
  return context;
};

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const res = await getVideosRequest();
      setVideos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createVideo = async (data) => {
    try {
      const res = await postVideo(data);
      setVideos([res.data]);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const res = await deleteVideoRequest(id);
      if (res.status === 204)
        setVideos(videos.filter((video) => video._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const getVideo = async (id) => {
    try {
      const res = await getVideoRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateVideo = async (id, data) => {
    try {
      await updateVideoRequest(id, data);
      setVideos(
        videos.map((video) =>
          video._id === id ? { ...video, ...data } : video
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        createVideo,
        getVideos,
        deleteVideo,
        getVideo,
        updateVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

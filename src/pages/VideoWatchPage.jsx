import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoRequest } from '../api/videos';
import AsideBar from '../components/AsideBar';

function VideoWatchPage() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await getVideoRequest(videoId);
        setVideo(response.data);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex bg-white min-h-screen">
      <AsideBar isOpen={true} />
      <main className="flex flex-col items-center grow p-6">
        <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
        <div className="">
          <video
            className="w-96 h-auto rounded-lg shadow-lg"
            src={`http://localhost:3000/api/videos/watch/${videoId}`}
            controls
          ></video>
        </div>
        <p className="mt-4 text-lg text-gray-700">{video.description}</p>
      </main>
    </div>
  );
}

export default VideoWatchPage;

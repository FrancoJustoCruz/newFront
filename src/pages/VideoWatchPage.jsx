import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoRequest } from '../api/videos';

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
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
      <video
        className="w-full max-w-3xl"
        src={`http://localhost:3000/api/videos/watch/${videoId}`}
        controls
      ></video>
      <p className="mt-4">{video.description}</p>
    </div>
  );
}

export default VideoWatchPage;
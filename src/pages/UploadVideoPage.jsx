import React, { useEffect, useRef, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useVideos } from '../context/VideoContext';
import { FaVideo, FaPause, FaPlay, FaStop, FaTimes } from 'react-icons/fa';
import AsideBar from '../components/AsideBar';

function UploadVideoPage() {
  const { createVideo } = useVideos();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const {
    status,
    startRecording,
    pauseRecording,
    stopRecording,
    resumeRecording,
    mediaBlobUrl,
    previewStream,
    clearBlobUrl,
  } = useReactMediaRecorder({ audio: true, video: true });

  const videoRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  const onSubmit = async (data) => {
    // Lógica para guardar el video
  };

  useEffect(() => {
    if (videoRef.current && previewStream) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);

  useEffect(() => {
    setIsRecording(status === 'recording');
  }, [status]);

  const handleClearRecording = () => {
    clearBlobUrl();
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <AsideBar isOpen={true} />
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Grabación de videos</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4 mb-8 md:mb-0">
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <h4 className="text-xl font-semibold mb-2 text-gray-800">En tiempo real</h4>
            <video
              ref={videoRef}
              controls
              autoPlay
              className="w-full h-auto rounded-md"
            />
          </div>

          {mediaBlobUrl && (
            <div className="bg-gray-100 rounded-lg shadow-md p-4 mt-4 relative">
              <button
                type="button"
                onClick={handleClearRecording}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <FaTimes className="text-xl" />
              </button>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Grabación:</h4>
              <video
                src={mediaBlobUrl}
                controls
                autoPlay
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
        </div>

        <div className="md:w-1/2 pl-4">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 rounded-lg shadow-md p-6">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Título"
                {...register("title", { required: true })}
                className="w-full bg-white text-gray-900 px-4 py-2 rounded-md"
              />
              <textarea
                rows="3"
                placeholder="Descripción"
                {...register("description", { required: true })}
                className="w-full bg-white text-gray-900 px-4 py-2 rounded-md"
              ></textarea>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                type="button"
                onClick={() => {
                  if (!isRecording) {
                    startRecording();
                  } else {
                    alert('Ya hay una grabación en progreso.');
                  }
                }}
                className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                <FaVideo className="text-xl" />
              </button>
              <button
                type="button"
                onClick={pauseRecording}
                className="p-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors duration-300"
              >
                <FaPause className="text-xl" />
              </button>
              <button
                type="button"
                onClick={resumeRecording}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <FaPlay className="text-xl" />
              </button>
              <button
                type="button"
                onClick={() => {
                  stopRecording();
                  setIsRecording(false);
                }}
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300"
              >
                <FaStop className="text-xl" />
              </button>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Guardar video
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadVideoPage;
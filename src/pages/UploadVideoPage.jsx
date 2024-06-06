import React, { useEffect, useRef, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useVideos } from '../context/VideoContext';

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
  } = useReactMediaRecorder({ audio: true, video: true });

  const videoRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  const onSubmit = async (data) => {
    if (!mediaBlobUrl) {
      alert('Primero debes grabar un video :D');
      return;
    }

    try {
      const mediaRes = await fetch(mediaBlobUrl);
      const blob = await mediaRes.blob();

      const formData = new FormData();
      formData.append('video', blob, 'video-usuario.mp4');
      formData.append('title', data.title);
      formData.append('description', data.description);

      await createVideo(formData);
      alert('Video guardado exitosamente');
      reset();
      navigate('/tasks');
    } catch (error) {
      console.error("Error al subir el video:", error);
      alert("Hubo un error al subir el video. Por favor, inténtalo de nuevo.");
    }
  };

  useEffect(() => {
    if (videoRef.current && previewStream) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);

  useEffect(() => {
    setIsRecording(status === 'recording');
  }, [status]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Grabación de videos</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-semibold mb-2">En tiempo real</h4>
          <video ref={videoRef} controls autoPlay height={200} className="rounded-md shadow-md mb-4" />
        </div>

        {mediaBlobUrl && (
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-semibold mb-2">Grabación:</h4>
            <video src={mediaBlobUrl} controls autoPlay height={200} className="rounded-md shadow-md mb-4" />
          </div>
        )}

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Título"
            {...register("title", { required: true })}
            className="w-full bg-gray-100 text-gray-900 px-4 py-2 rounded-md"
          />
          <textarea
            rows="3"
            placeholder="Descripción"
            {...register("description", { required: true })}
            className="w-full bg-gray-100 text-gray-900 px-4 py-2 rounded-md"
          ></textarea>
        </div>

        <div className="flex justify-around space-x-4">
          <button
            type="button"
            onClick={() => {
              if (!isRecording) {
                startRecording();
              } else {
                alert('Ya hay una grabación en progreso.');
              }
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Empezar a grabar
          </button>
          <button
            type="button"
            onClick={pauseRecording}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600"
          >
            Pausar
          </button>
          <button
            type="button"
            onClick={resumeRecording}
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
          >
            Reanudar
          </button>
          <button
            type="button"
            onClick={() => {
              stopRecording();
              setIsRecording(false);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
          >
            Detener
          </button>
        </div>
        
        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600"
          >
            Guardar video
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadVideoPage;
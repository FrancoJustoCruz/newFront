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
      // reset();
      // navigate('/tasks');
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
    <>
      <h1>Grabación de videos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>En tiempo real</h4>
        <video ref={videoRef} controls autoPlay height={200} />

        {mediaBlobUrl && (
          <div>
            <h4>Grabación:</h4>
            <video src={mediaBlobUrl} controls autoPlay height={200} />
          </div>
        )}

        <div>
          <input
            type="text"
            placeholder="Título"
            {...register("title", { required: true })}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md my-2"
          />
          <textarea
            rows="3"
            placeholder="Descripción"
            {...register("description", { required: true })}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md my-2"
          ></textarea>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              if (!isRecording) {
                startRecording();
              } else {
                alert('Ya hay una grabación en progreso.');
              }
            }}
          >
            Empezar a grabar
          </button>
          <button type="button" onClick={pauseRecording}>
            Pausar grabación
          </button>
          <button type="button" onClick={resumeRecording}>
            Reanudar grabación
          </button>
          <button
            type="button"
            onClick={() => {
              stopRecording();
              setIsRecording(false);
            }}
          >
            Detener grabación
          </button>
        </div>
        <br />
        <button type="submit">Guardar video</button>
      </form>
    </>
  );
}

export default UploadVideoPage;
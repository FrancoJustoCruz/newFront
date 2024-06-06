import React, { useEffect, useState } from "react";
import { useTasks } from "../context/TasksContext";
import AsideBar from "../components/AsideBar";
import { useVideos } from "../context/VideoContext";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import frases from '../frases.json'; // Importa el archivo JSON

function DashboardPage() {
  const { getTasks } = useTasks();
  const { getVideos } = useVideos();
  const [frase, setFrase] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    getTasks();
    getVideos();
    mostrarFraseAleatoria();
  }, []);

  const mostrarFraseAleatoria = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setFrase(frases[randomIndex]);
  };
 
  return (
    <div className="flex gap-0 bg-white min-h-[80vh] pl-10 pb-10">
      <AsideBar isOpen={true} />
      <main className="flex flex-col grow shrink-0 basis-0 w-full p-4 items-center justify-center">
      {user && (
  <motion.h1
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="text-[7rem] font-bold text-sky-500 mb-4"
  >
    Bienvenido {user.username}
  </motion.h1>
)}

        <section className="flex flex-col justify-center pb-16 mt-6 max-w-[1040px] self-center items-center">
          {frase && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-2xl font-semibold text-blue-600 italic">{frase.texto}</p>
              <p className="text-lg text-gray-500 mt-2">- {frase.autor}</p>
            </motion.div>
          )}
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;
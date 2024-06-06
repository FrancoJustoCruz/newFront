import React, { useEffect, useState } from "react";
import { useTasks } from "../context/TasksContext";
import AsideBar from "../components/AsideBar";
import { useVideos } from "../context/VideoContext";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import frases from "../frases.json";
import heroImage from "/hero2.jpg"; // Importa la imagen

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
    <div className="flex bg-white min-h-[80vh]">
      <AsideBar isOpen={true} />

      <main className="flex flex-col flex-grow ml-56 items-center relative">
        {user && (
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 animate-text z-10"
          >
            Bienvenido {user.username}
          </motion.h1>
        )}
        <section className="flex flex-col justify-center pb-16  max-w-[1040px] self-center items-center z-10">
          {frase && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-2xl font-semibold text-gray-600 italic">
                {frase.texto}
              </p>
              <p className="text-lg text-gray-500 mt-2">- {frase.autor}</p>
            </motion.div>
          )}
        </section>
        <img
          src={heroImage}
          alt="Hero Image"
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[49%] z-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </main>
    </div>
  );
}

export default DashboardPage;
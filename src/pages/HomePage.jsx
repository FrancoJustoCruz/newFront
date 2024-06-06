import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200 flex flex-col items-center justify-center min-h-[628px]">
      <div className="flex-grow flex items-center justify-around max-w-5xl mx-auto gap-x-40">
        <div className="text-gray-700 max-w-md">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 animate-text">
            Bienvenido a <span className="text-gray-600">VideoAcademy</span>
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            Graba y sube tus videos de práctica de inglés de forma sencilla y segura.
          </p>
          <Link
            to="/login"
            className="px-6 py-3 bg-gradient-to-r from-sky-400 to-indigo-400 text-white rounded-full hover:bg-gradient-to-l hover:from-indigo-400 hover:to-sky-400 transition-colors duration-300 shadow-md shadow-sky-300/50"
          >
            Subir Video
          </Link>
        </div>
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 rounded-full border-8 border-sky-400 animate-spin"></div>
          <div className="absolute inset-8 rounded-full border-8 border-blue-300 animate-pulse"></div>
          <div className="absolute inset-16 rounded-full border-8 border-indigo-400 animate-bounce">
            <span className="text-gray-700 text-3xl font-bold">🎥</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
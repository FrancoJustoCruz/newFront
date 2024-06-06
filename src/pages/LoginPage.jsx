import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import mail from '../../public/mail.png';
import contraseña from '../../public/padlock.png';
import Redes from '../components/Redes';

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(data => {
    signin(data);
  });

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200'>
      <div className='bg-white/90 backdrop-blur-sm border-2 max-w-md p-10 rounded-[25px] shadow-lg'>
        {Array.isArray(signinErrors) && signinErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white rounded-md' key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit} className="space-y-6">
          <h2 className="text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 animate-text">
            Bienvenido de nuevo
          </h2>
          <h3 className="text-center text-gray-600">Inicia sesión para continuar</h3>
          <div className="relative">
            <img src={mail} alt="mail icon" className="absolute left-3 top-[50%] transform -translate-y-1/2 w-5 h-5 opacity-55" />
            <input
              type="email"
              {...register("email", { required: true })}
              className='w-full bg-gray-100 border-2 border-gray-300 text-gray-600 px-4 py-2 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-sky-400'
              placeholder='Correo electrónico'
            />
            {errors.email && (
              <p className='text-red-500 absolute'>El correo electrónico es requerido</p>
            )}
          </div>
          <div className="relative">
            <img src={contraseña} alt="password icon" className="absolute left-3 top-[50%] transform -translate-y-1/2 w-5 h-5 opacity-55" />
            <input
              type="password"
              {...register("password", { required: true })}
              className='w-full bg-gray-100 border-2 border-gray-300 text-gray-600 px-4 py-2 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-sky-400'
              placeholder='Contraseña'
            />
            {errors.password && (
              <p className='text-red-500 absolute'>La contraseña es requerida</p>
            )}
          </div>
          <button type='submit' className='w-full bg-gradient-to-r from-sky-400 to-indigo-400 text-white px-4 py-2 rounded-md hover:bg-gradient-to-l hover:from-indigo-400 hover:to-sky-400 transition-colors duration-300 shadow-md shadow-sky-300/50'>
            Iniciar sesión
          </button>
          <br />
          <p className='text-center text-gray-600'>o continúa con estas redes sociales</p>
          <Redes />
        </form>
        <p className="flex gap-x-2 text-center justify-center mt-4 text-gray-600">
          ¿No tienes una cuenta? <Link to="/register" className="text-sky-400 hover:text-sky-600">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

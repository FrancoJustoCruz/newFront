import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import mail from '../../public/mail.png';
import usuario from '../../public/userlogo.png'
import contraseña from '../../public/padlock.png'
import Redes from '../components/Redes'
import logo from '../../public/logodev .png'

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className='flex items-center justify-center min-h-screen bg-white'>
            <div className='bg-white border-2 max-w-md p-10 rounded-[25px]'>
                {registerErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div>
                ))}
                <form onSubmit={onSubmit} className="space-y-6">
                <div className="flex">
                <img src={logo} className="w-8 h-8 mr-2 pt-2" alt="Logo" />
                <h5 className="flex text- font-bold place-items-center text-[#282051]">
                    devchallenges
                </h5></div>
                    
                    <h2 className="text-xl text-left font-semibold">Join thousands of learners from around the world</h2>
                    <h3 className="text-left">Master web development by making real-life projects. There are multiple paths for you to choose</h3>
                    <div className="relative">
                    <img src={usuario} alt="mail icon" className="absolute left-3 top-[50%] transform -translate-y-1/2 w-5 h-5 opacity-55" />
                        <input 
                            type="text" 
                            {...register("username", { required: true })} 
                            className='w-full bg-white border-2 text-gray px-4 py-2 rounded-md pl-10'
                            placeholder='username' 
                        />
                        {errors.username && (
                            <p className='text-red-500 absolute'>Username is required</p>
                        )}
                    </div>
                    <div className="relative">
                        <img src={mail} alt="mail icon" className="absolute left-3 top-[50%] transform -translate-y-1/2 w-5 h-5 opacity-55" />
                        <input 
                            type="email" 
                            {...register("email", { required: true })} 
                            className='w-full bg-white border-2 text-gray px-4 py-2 rounded-md pl-10' 
                            placeholder='email' 
                        />
                        {errors.email && (
                            <p className='text-red-500 absolute'>Email is required</p>
                        )}
                    </div>
                    <div className="relative">
                    <img src={contraseña} alt="mail icon" className="absolute left-3 top-[50%] transform -translate-y-1/2 w-5 h-5 opacity-55" />
                        <input 
                            type="password" 
                            {...register("password", { required: true })} 
                            className='w-full bg-white border-2 text-gray px-4 py-2 rounded-md pl-10'   
                            placeholder='password' 
                        />
                        {errors.password && (
                            <p className='text-red-500 absolute'>Password is required</p>
                        )}
                    </div>
                    <button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 rounded-md'>
                        Start coding now
                    </button>
                    <br />
                    <p className='text-center'>or continue with these social profile</p>
                    <Redes/>
                </form>
                <p className="flex gap-x-2 text-center justify-center mt-4"> 
                    Already a member?<Link to="/login" className="text-sky-500">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
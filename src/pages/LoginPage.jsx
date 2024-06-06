import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import mail from '../../public/mail.png';
import contraseña from '../../public/padlock.png'
import Redes from '../components/Redes'
import logo from '../../public/logodev .png'

function LoginPage() {
  const {register, handleSubmit, formState:{errors},}=useForm()
  const {signin, errors: signinErrors, isAuthenticated}=useAuth()
  const navigate=useNavigate()
  const onSubmit=handleSubmit(data=>{
    signin(data)
  })

  useEffect(()=>{
    if(isAuthenticated) navigate('/dashboard')
  },[isAuthenticated])

  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
            <div className='bg-white border-2 max-w-md p-10 rounded-[25px]'>
      {
  Array.isArray(signinErrors) && signinErrors.map((error, i) => (
    <div className='bg-red-500 p-2 text-white' key={i}>
      {error}
    </div>
  ))
}
      <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex">
                <img src={logo} className="w-8 h-8 mr-2 pt-2" alt="Logo" />
                <h5 className="flex text- font-bold place-items-center text-[#282051]">
                    devchallenges
                </h5></div>
        <h1>Login</h1>
           <div className="relative">
           <img src={mail} alt="mail icon" className="absolute left-3 top-[50%] transform -translate-y-1/2 w-5 h-5 opacity-55" />
           <input 
           type="email" 
           {...register("email", {required:true})} 
           className='w-full bg-white border-2 text-gray px-4 py-2 rounded-md pl-10'
           placeholder='email'/>
           {
               errors.email &&(
                   <p className='text-red-500 absolute'>Email is required</p>
               )
           }
           </div>
           <div className="relative">
           <img src={contraseña} alt="mail icon" className="absolute left-3 top-[50%] transform -translate-y-1/2 w-5 h-5 opacity-55" />
           <input type="password" {...register("password", {required:true})}className='w-full bg-white border-2 text-gray px-4 py-2 rounded-md pl-10'placeholder='password' />
           {
               errors.password &&(
                   <p className='text-red-500 absolute'>Password is required</p>
               )
           }
           </div>
           <button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 rounded-md'>
               Login
           </button>
           <br />
               <p className='text-center'>or continue with these social profile</p>
           <Redes/>
       </form>
       <p className="flex gap-x-2 justify-between mt-5"> 
        Dont have an account yet?<Link to="/register" className="text-sky-500">Register</Link>
       </p>
      </div>
    </div>
  )
}

export default LoginPage
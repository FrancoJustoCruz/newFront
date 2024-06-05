import { useAuth } from "../context/AuthContext"
import perfil2 from '../../public/perfil2.jpg'
import { Link } from "react-router-dom"

function ProfilePage() {
  const {isAuthenticated, logout,user}=useAuth()
  return (
    <div className="flex items-center justify-center w-full bg-white mb-10">
      <div className="w-211  p-0 rounded-lg ">
        <div className="mb-6 p-4">
          <div>
          <h1 className="text-2xl font-semibold mb-2 text-center">Personal Info</h1>
          <h2 className="text-gray-600 text-center">Basic info, like your name and photo</h2>
          </div>
        </div>
        <div className="flex border-2  justify-between rounded-t-lg p-8">
        <div className=" ">
          <h1 className="text-xl font-semibold mb-2">Profile</h1>
          <h2 className="text-gray-600">Some info may be visible to other people</h2>
          </div>
          <div >
            
            <Link className="border-2 p-1 rounded-[10px] px-7 mt-4" to='/editProfile'>Edit</Link>
            
            </div>
        
        
            
          
        </div>
        <div className=" flex border-2 py-5 border-t-transparent p-8 "><div className="w-40 mt-4 text-gray-400 opacity-60">PHOTO</div> <div className="ml-4"><img className="w-10 h-12" src={perfil2} alt="" /></div></div>
        <div className=" flex border-2 py-5 border-t-transparent p-8 "><div className="w-40 text-gray-400 opacity-60">NAME</div> <div><h1 className="ml-4 font-semibold "> {user.username}</h1></div></div>
        <div className=" flex border-2 py-5 border-t-[0px] p-8"><div className="w-32 text-gray-400 opacity-60">BIO</div> <div><h1 className="pl-12 font-semibold ">I am a software developer and a big fan  of devchallenges... </h1></div></div>
        <div className=" flex border-2 py-5 border-t-[0px] p-8"><div className="w-40 text-gray-400 opacity-60">PHONE</div> <div><h1 className="ml-4 font-semibold ">908249274292</h1></div></div>
        <div className=" flex border-2 py-5 border-t-[0px] p-8"><div className="w-40 text-gray-400 opacity-60">EMAIL</div> <div><h1 className="ml-4 font-semibold "> {user.email}</h1></div></div>
        <div className=" flex border-2 py-5 border-t-[0px] p-8"><div className="w-40 text-gray-400 opacity-60">PASSWORD</div> <div><h1 className="ml-4 font-semibold ">************</h1></div></div>
      </div>
    </div>
  );
}

export default ProfilePage;
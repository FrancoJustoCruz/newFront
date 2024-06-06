import { useAuth } from "../context/AuthContext";
import perfil2 from '../../public/perfil2.jpg';
import { Link } from "react-router-dom";

function ProfilePage() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <div className="flex items-center justify-center w-full bg-gray-100 mb-10 py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="mb-6 p-6 bg-sky-500 rounded-t-lg">
          <h1 className="text-2xl font-semibold mb-2 text-center text-white">Personal Info</h1>
          <h2 className="text-gray-200 text-center">Basic info, like your name and photo</h2>
        </div>
        <div className="flex border-b border-gray-200 justify-between p-8 bg-gray-50 rounded-t-lg">
          <div>
            <h1 className="text-xl font-semibold mb-2 text-sky-700">Profile</h1>
            <h2 className="text-gray-600">Some info may be visible to other people</h2>
          </div>
          <div>
            <Link className="bg-sky-500 text-white p-1 rounded-md px-7 mt-4" to='/editProfile'>Edit</Link>
          </div>
        </div>
        <div className="flex items-center border-b border-gray-200 p-8 bg-white">
          <div className="w-40 text-gray-400">PHOTO</div>
          <div className="ml-4">
            <img className="w-16 h-16 rounded-full" src={perfil2} alt="Profile" />
          </div>
        </div>
        <div className="flex items-center border-b border-gray-200 p-8 bg-gray-50">
          <div className="w-40 text-gray-400">NAME</div>
          <div className="ml-4">
            <h1 className="font-semibold text-sky-700">{user.name}</h1>
          </div>
        </div>
        <div className="flex items-center border-b border-gray-200 p-8 bg-white">
          <div className="w-40 text-gray-400">LAST NAME</div>
          <div className="ml-4">
            <h1 className="font-semibold text-sky-700">{user.lastName}</h1>
          </div>
        </div>
        <div className="flex items-center border-b border-gray-200 p-8 bg-gray-50">
          <div className="w-40 text-gray-400">USERNAME</div>
          <div className="ml-4">
            <h1 className="font-semibold text-sky-700">{user.username}</h1>
          </div>
        </div>
        <div className="flex items-center border-b border-gray-200 p-8 bg-white">
          <div className="w-40 text-gray-400">BIO</div>
          <div className="ml-4">
            <h1 className="font-semibold text-sky-700">I am a software developer and a big fan of devchallenges...</h1>
          </div>
        </div>
        <div className="flex items-center border-b border-gray-200 p-8 bg-gray-50">
          <div className="w-40 text-gray-400">PHONE</div>
          <div className="ml-4">
            <h1 className="font-semibold text-sky-700">908249274292</h1>
          </div>
        </div>
        <div className="flex items-center border-b border-gray-200 p-8 bg-white">
          <div className="w-40 text-gray-400">EMAIL</div>
          <div className="ml-4">
            <h1 className="font-semibold text-sky-700">{user.email}</h1>
          </div>
        </div>
        <div className="flex items-center border-b border-gray-200 p-8 bg-gray-50 rounded-b-lg">
          <div className="w-40 text-gray-400">PASSWORD</div>
          <div className="ml-4">
            <h1 className="font-semibold text-sky-700">************</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
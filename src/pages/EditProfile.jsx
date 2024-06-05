import { Link } from "react-router-dom";
import perfil2 from '../../public/perfil2.jpg';

function EditProfile() {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <div className="w-3/6">
        <Link to={'/profile'} className="block mb-4 text-blue-500">{'< Back'}</Link>
        <div className="justify-center border-2 p-12 mb-8 rounded-lg">
          <h1 className="text-xl font-semibold mb-1">Change Info</h1>
          <h2 className="text-gray-600 mb-4">Changes will be reflected to every service</h2>
          
          <div className="flex items-center mb-4">
            <img src={perfil2} alt="Profile" className="w-16 h-16 rounded-[15px]" />
            <button className="ml-4">CHANGE PHOTO</button>
          </div>
          
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Name</label>
            <textarea className="w-1/2 p-2 border h-14 resize-none overflow-hidden border-black rounded-[12px]" placeholder="Enter your name..."></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700">BIO</label>
            <textarea className="w-1/2 p-2 border  h-24 resize-none overflow-hidden border-black rounded-[12px]" placeholder="Enter your bio..."></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700">PHONE</label>
            <textarea className="w-1/2 p-2 border  h-14 resize-none overflow-hidden border-black rounded-[12px]" placeholder="Enter your phone..."></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700">EMAIL</label>
            <textarea className="w-1/2 p-2 border  h-14 resize-none overflow-hidden border-black rounded-[12px]" placeholder="Enter your email..."></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700">PASSWORD</label>
            <textarea className="w-1/2 p-2 border  h-14 resize-none overflow-hidden border-black rounded-[12px]" placeholder="Enter your new password..."></textarea>
          </div>
          <Link to='/profile' className="bg-blue-600 py-2 px-4 rounded-md text-white">Save</Link>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
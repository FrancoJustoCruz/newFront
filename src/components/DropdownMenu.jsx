import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import profile from '../../public/profile.png';
import groupchat from '../../public/groupchat.png';
import perfil2 from '../../public/perfil2.jpg';
import logoutlogo2 from '../../public/logout2.png';
import down from '../../public/down.png';
import up from '../../public/up.png';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { isAuthenticated, logout, user } = useAuth();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="relative font-[sans-serif] w-max mx-auto p-2" ref={dropdownRef}>
      <button
        type="button"
        className="px-6 py-2 flex items-center bg-white text-[#333] text-sm font-semibold outline-none"
        onClick={toggleMenu}
      >
        <img
          src={perfil2}
          className="w-8 h-9 mr-2 rounded-sm shrink-0"
          alt="user avatar"
        />
        {user.username}
        <img 
          src={isOpen ? up : down}
          className="ml-2 w-4"
        />
      </button>
      {isOpen && (
        <motion.ul
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="absolute shadow-sky-300 shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto"
        >
          <li className="py-2.5 px-6 flex items-center text-[#333] text-sm cursor-pointer hover:bg-sky-500 hover:text-white" onClick={closeMenu}>
            <img src={profile} alt="profile icon" className="mr-2 opacity-70" />
            <Link to="/profile">My profile</Link>
          </li>
          <li className="py-2.5 px-6 flex items-center text-[#333] text-sm cursor-pointer hover:bg-sky-500 hover:text-white" onClick={closeMenu}>
            <img src={groupchat} alt="group chat icon" className="mr-2 opacity-70" />
            <Link to="/dashboard">Group chat</Link>
          </li>
          <hr className="w-[90%] mx-auto" />
          <li className="py-2.5 px-6 flex items-center text-red-500 text-sm cursor-pointer hover:bg-red-500 hover:text-white" onClick={() => { logout(); closeMenu(); }}>
            <img src={logoutlogo2} alt="logout icon" className="mr-2 opacity-50" />
            <Link to="/">Logout</Link>
          </li>
        </motion.ul>
      )}
    </div>
  );
}

export default DropdownMenu;
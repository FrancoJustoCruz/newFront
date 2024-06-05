import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import DropdownMenu from '../components/DropdownMenu'
import logo from '../../public/logodev .png'

function Navbar() {
    const { isAuthenticated } = useAuth()

    return (
        <nav className="my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to={isAuthenticated ? "/tasks" : "/"}>
              <div className="flex">
                <img src={logo} className="w-8 h-8 mr-2 pt-2" alt="Logo" />
                <h1 className="flex text-2xl font-bold place-items-center text-[#282051]">
                    devchallenges
                </h1></div>
            
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <li>
                        <DropdownMenu />
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to='/login' className=" border-gray-400 border-[1px] px-4 py-1 rounded-md">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register' className="border-gray-400 border-[1px] px-4 py-1 rounded-md">
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
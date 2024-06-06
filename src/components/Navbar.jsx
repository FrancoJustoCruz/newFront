import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DropdownMenu from '../components/DropdownMenu';


function Navbar() {
    const { isAuthenticated } = useAuth();

    return (
        <nav className="my-3 flex py-5 px-10 rounded-lg bg-white ">
            
            <ul className="flex gap-x-2 ml-auto">
                {isAuthenticated ? (
                    <li>
                        <DropdownMenu />
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to='/login' className="border-gray-400 border-[1px] px-4 py-1 rounded-md">
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
    );
}

export default Navbar;
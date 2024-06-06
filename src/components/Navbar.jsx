import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DropdownMenu from '../components/DropdownMenu';

function Navbar() {
    const { isAuthenticated } = useAuth();

    return (
        <nav className="my-3 flex py-5 px-10 rounded-lg bg-white ">
            <ul className="flex gap-x-2 ml-auto">
                {isAuthenticated && (
                    <li>
                        <DropdownMenu />
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
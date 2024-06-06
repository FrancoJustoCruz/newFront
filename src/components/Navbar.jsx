import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DropdownMenu from "../components/DropdownMenu";
import logo from "../../public/logodev .png";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="flex py-5 px-10 rounded-lg">
      <Link to='/' >
      <div className="flex">
        <img
          loading="lazy"
          src="https://www.funval.fundaciondevalores.org/pluginfile.php/1/theme_moove/logo/1708634684/LOGO%20FUNVAL%20MOODLE.png"
          className="max-w-full aspect-[4] w-[140px] m-auto"
          alt=""
        />
      </div>
      </Link>
      <ul className="flex gap-x-2 ml-auto">
        {" "}
        {/* Aquí se añade ml-auto para alinear el DropdownMenu a la derecha */}
        {isAuthenticated ? (
          <li>
            <DropdownMenu />
          </li>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className=" border-gray-400 border-[1px] px-4 py-1 rounded-md"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="border-gray-400 border-[1px] px-4 py-1 rounded-md"
              >
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

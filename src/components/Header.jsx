import { Link } from "react-router-dom";
import { useUserContext } from "./UserContext";

function Header() {
  const { isLoggedIn, logout } = useUserContext();

  return (
    <header className="fixed top-0 w-full flex flex-row justify-between items-center p-2 bg-white z-10 shadow-sm">
      <Link to="/" className="flex flex-row items-center gap-2 cursor-pointer no-underline">
        <img src="/public/Logo.png" alt="WellFit Logo" width="50" height="50" />
        <span className="text-indigo-600 text-sm md:text-base font-bold">WellFit</span>
      </Link>

      <div className="flex flex-row gap-4 justify-around items-center w-max">
        {isLoggedIn ? (
          <div className="flex flex-row gap-4 justify-around items-center w-max">

          <Link to='/entrenador' 
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer no-underline">Soy Entrenador</Link>
          <button
            onClick={logout}
            className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 cursor-pointer no-underline"
          >LogOut
            </button>
            </div>
        ) : (
          <div className="flex flex-row gap-4 justify-around items-center w-max">
            <Link
              to="/register"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer no-underline"
            >
              SignIn
            </Link>
            <Link
              to="/login"
              className="flex w-full justify-center rounded-md bg-indigo-200 px-3 py-1.5 text-sm/6 font-semibold text-gray-800 hover:bg-indigo-300 cursor-pointer no-underline"
            >
              LogIn
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
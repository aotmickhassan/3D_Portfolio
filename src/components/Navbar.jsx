import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
        <p className="blue-gradient_text text-2xl">RF</p>
      </NavLink>
      <nav className="text-2xl flex gap-20 font-medium">
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
        About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
        Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
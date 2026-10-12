import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = (isActive: boolean) =>
  `transition-colors uppercase tracking-widest ${isActive ? "text-amber-400 font-bold" : "text-gray-300 hover:text-amber-400"}`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-6">
      <header className="w-full flex items-center justify-between px-6 py-3 bg-[#0d1723]/50 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-xl relative ">
        <Link
          to="/"
          className="flex items-center gap-4 hover:opacity-90 transition-opacity"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-amber-400 rounded-full overflow-hidden">
            <img src="./images/logo.png" alt="Studio Ghibli Logo" />
          </div>
          <span className="font-heading text-xl md:text-2xl text-amber-400 font-medium tracking-[0.15em] uppercase">
            Studio Ghibli
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${navLinkClass(isActive)} text-xs`}
          >
            Filmes
          </NavLink>

          <span className="text-slate-600/70 font-light text-lg mb-1">|</span>

          <NavLink
            to="/about"
            className={({ isActive }) => `${navLinkClass(isActive)} text-xs`}
          >
            Sobre
          </NavLink>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        <nav
          className={`absolute top-full left-0 w-full mt-3 p-6 bg-[#0d1723]/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl flex-col gap-4 text-center md:hidden transition-all duration-300 ${
            isOpen ? "flex opacity-100 scale-100" : "hidden opacity-0 scale-95"
          }`}
        >
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) => `py-2 text-sm ${navLinkClass(isActive)}`}
          >
            Filmes
          </NavLink>

          <div className="w-full h-px bg-slate-700/50" />

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => `py-2 text-sm ${navLinkClass(isActive)}`}
          >
            Sobre
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

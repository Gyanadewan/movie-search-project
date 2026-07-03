import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <nav className="bg-gray-900 text-white shadow-md relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-1 md:px-6 py-4">
        {/* Logo */}
        <h2 className="text-3xl font-bold cursor-pointer">
          <span className="text-red-500">Movie</span>
          <span className="text-yellow-400">Search</span>
        </h2>

        {/* Menu */}
        <ul className=" hidden md:flex items-center gap-8 font-medium">
          <li>
            <a href="/" className="hover:text-red-500 transition duration-300">
              Home
            </a>
          </li>

          <li>
            <a
              href="/movies"
              className="hover:text-red-500 transition duration-300"
            >
              Movies
            </a>
          </li>

          <li>
            <a
              href="/favorites"
              className="hover:text-red-500 transition duration-300"
            >
              Favorites
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="hover:text-red-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Search Box */}
        <div className=" hidden md:flex">
          <input
            type="text"
            placeholder="Search movies..."
            className=" px-2 md:px-4 py-1 md:py-2 rounded-l-md text-white outline-none"
          />

          <button className="bg-red-500 hover:bg-red-600  px-4 py-2 rounded-r-md transition duration-300">
            Search
          </button>
        </div>

          {/* mobile menu */}
        <div className="  md:hidden">
           <button className="font-bold text-3xl text-white" onClick={()=> setOpen(!open)}> < CiMenuBurger/></button>
        </div>
       
      </div>
       {open && (
    <ul className="absolute right-4 top-16 w-40 bg-gray-800 rounded-lg shadow-lg py-4 md:hidden">
      <li className="px-6 py-2 hover:bg-gray-700">
        <a href="/">Home</a>
      </li>
      <li className="px-6 py-2 hover:bg-gray-700">
        <a href="/movies">Movies</a>
      </li>
      <li className="px-6 py-2 hover:bg-gray-700">
        <a href="/favorites">Favorites</a>
      </li>
      <li className="px-6 py-2 hover:bg-gray-700">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  )}
    </nav>
  );
}

export default Navbar;
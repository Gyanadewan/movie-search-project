import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h2 className="text-3xl font-bold cursor-pointer">
          <span className="text-red-500">Movie</span>
          <span className="text-yellow-400">Search</span>
        </h2>

        {/* Menu */}
        <ul className="flex items-center gap-8 font-medium">
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
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search movies..."
            className="px-4 py-2 rounded-l-md text-white outline-none"
          />

          <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-r-md transition duration-300">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import React from "react";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-red-500">Movie</span>
            <span className="text-yellow-400">Search</span>
          </h2>

          <p className="text-gray-400">
            Discover your favorite movies and explore the latest trending films
            anytime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-red-500">
                Home
              </a>
            </li>

            <li>
              <a href="/movies" className="hover:text-red-500">
                Movies
              </a>
            </li>

            <li>
              <a href="/favorites" className="hover:text-red-500">
                Favorites
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Action</li>
            <li>Comedy</li>
            <li>Drama</li>
            <li>Horror</li>
            <li>Animation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <p className=" flex  items-centern gap-2 text-gray-400"><span className="text-2xl"><CgMail/></span>moviesearch@gmail.com</p>
          <p className="flex items-center gap-2 mt-2 text-gray-400"> <span className="text-2xl"><IoLocationOutline/></span>Dhaka, Bangladesh</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-2xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-pink-500" >
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-blue-400">
              <FaLinkedin />
            </a>

            <a href="#" className="hover:text-gray-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        © 2026 MovieSearch. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
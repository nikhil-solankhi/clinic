import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white text-black shadow-lg fixed w-full top-0 z-50 transition-transform duration-300 h-16">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="navbar-logo text-3xl font-serif font-bold">
          <Link
            to="/"
            className="hover:text-primary-dark transition-colors duration-300"
          >
            Spandan
          </Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          ref={menuRef}
          className={`lg:flex lg:space-x-8 lg:static lg:bg-transparent lg:p-0 fixed top-0 right-0 w-full lg:w-auto bg-white transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0`}
        >
          {[
            "about-us",
            "services",
            "experts",
            "testimonials",
            "contact",
            "login",
            "signup",
          ].map((section, index) => (
            <li key={index} className="p-4 lg:p-0">
              <Link
                to={`/${section}`}
                className="block lg:inline text-lg hover:text-primary-dark transition-colors duration-300"
                onClick={toggleMenu}
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1).replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

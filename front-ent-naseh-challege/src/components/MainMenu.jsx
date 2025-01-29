import { useState } from "react";

export default function MainMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-50">
      <button className="text-gray-700 md:hidden" onClick={toggleMenu}>
        {/* SVG icon code - no changes here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <ul
        className={`absolute top-14 left-0 w-full bg-white shadow-lg md:static md:bg-transparent md:shadow-none md:flex md:gap-8 text-gray-700 font-medium transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "block  translate-y-[-10] p-20 z-50 text-5xl"
            : "hidden -translate-y-full"
        }`}
      >
        {/* Menu items - no changes here */}
        <li>
          <a href="#" className="block px-4 py-2 hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:text-blue-600">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:text-blue-600">
            Law Firm
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:text-blue-600">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:text-blue-600">
            Community
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:text-blue-600">
            Contact Us
          </a>
        </li>
      </ul>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ease-in-out text-xl"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}

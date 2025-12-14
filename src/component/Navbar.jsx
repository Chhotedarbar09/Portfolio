import { useState } from "react";
import { Link } from "react-router-dom";
import pantherLogo from '../assets/Panther-logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#1e1e1e]/95 backdrop-blur-md border-b border-gray-700 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">


        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-400">
          MyPortfolio
        </h1>

        {/* 🔴 MIDD AD LOGO ONLY */}
        <img
          src={pantherLogo}
          alt="Panther Ad"
          className="w-30 h-20 object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <Link to="/skills" className="hover:text-teal-400">Skills</Link>
          <Link to="/contact" className="hover:text-teal-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1e1e1e] border-t border-gray-700 flex flex-col space-y-4 py-4 px-6 text-gray-300 text-lg font-medium shadow-lg">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link to="/contact" className="hover:text-teal-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}

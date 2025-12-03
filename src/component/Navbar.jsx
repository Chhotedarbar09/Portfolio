import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#1e1e1e]/95 backdrop-blur-md border-b border-gray-700 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-400">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <a href="#home" className="hover:text-teal-400 transition">Home</a>
          <a href="#about" className="hover:text-teal-400 transition">About</a>
          <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
          <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
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
          <a href="#home" onClick={() => setOpen(false)} className="hover:text-teal-400">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-teal-400">About</a>
          <a href="#skills" onClick={() => setOpen(false)} className="hover:text-teal-400">Skills</a>
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-teal-400">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-teal-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

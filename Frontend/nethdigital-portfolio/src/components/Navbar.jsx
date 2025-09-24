import React from 'react';

const Navbar = () => (
  <nav className="fixed w-full z-20 top-0 left-0 bg-white/80 backdrop-blur shadow-sm transition-colors">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      <div className="font-heading text-2xl font-bold text-primary">NethDigital</div>
      <ul className="flex space-x-6 font-body text-base">
        <li><a href="#home" className="hover:text-accent transition">Home</a></li>
        <li><a href="#about" className="hover:text-accent transition">About</a></li>
        <li><a href="#services" className="hover:text-accent transition">Services</a></li>
        <li><a href="#team" className="hover:text-accent transition">Team</a></li>
        <li><a href="#gallery" className="hover:text-accent transition">Gallery</a></li>
        <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

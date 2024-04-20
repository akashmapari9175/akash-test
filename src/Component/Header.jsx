import React from "react";

const Header = () => {
  return (
    <header className=" font-mono bg-gray-900 py-4">
      <nav className="w-full flex justify-between items-center px-8">
        <h1 className="text-white text-2xl font-bold">Your Name</h1>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

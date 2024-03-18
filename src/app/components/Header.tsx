import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="h-16 bg-primary flex items-center text-white px-40 py-5 sticky top-0">
      <p className="mr-60 whitespace-nowrap">Julie Media Concept</p>

      <div className="flex justify-around items-center w-full uppercase text-base text-ash">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contactMe">Contact Me</a>
      </div>
    </nav>
  );
};

export { Header };

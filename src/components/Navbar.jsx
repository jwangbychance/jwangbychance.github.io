import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-open-sans text-sm w-full flex justify-center gap-5 p-3">
      <img
        className="mr-auto border-[#d3b6ff] border-2 rounded-full p-3"
        src="/favicon.ico"
      ></img>
      <div className="mr-auto p-5 flex gap-3 md:-ml-24">
        <NavLink
          exact
          to="/"
          className="[&.active]:bg-[#8b3dff] [&.active]:text-white [&.active]:font-semibold p-2 px-4 rounded-md hover:bg-[#d3b6ff] hover:translate-y-[-0.25rem] transition ease-in-out duration-500"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          className="[&.active]:bg-[#8b3dff] [&.active]:text-white [&.active]:font-semibold p-2 px-4 rounded-md hover:bg-[#d3b6ff] hover:translate-y-[-0.25rem] transition ease-in-out duration-500"
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/projects"
          className="[&.active]:bg-[#8b3dff] [&.active]:text-white [&.active]:font-semibold p-2 px-4 rounded-md hover:bg-[#d3b6ff] hover:translate-y-[-0.25rem] transition ease-in-out duration-500"
        >
          Projects
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

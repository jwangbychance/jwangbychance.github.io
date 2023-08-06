import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-open-sans text-sm flex justify-center gap-5 text-black w-full p-3 pr-5">
      <NavLink
        exact
        to="/"
        className="[&.active]:bg-[#8b3dff] [&.active]:text-white [&.active]:font-semibold p-2 px-4 rounded-md hover:bg-[#d3b6ff] transition ease-in-out duration-500"
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/about"
        className="[&.active]:bg-[#8b3dff] [&.active]:text-white [&.active]:font-semibold p-2 px-4 rounded-md hover:bg-[#d3b6ff] transition ease-in-out duration-500"
      >
        About
      </NavLink>
      <NavLink
        exact
        to="/projects"
        className="[&.active]:bg-[#8b3dff] [&.active]:text-white [&.active]:font-semibold p-2 px-4 rounded-md hover:bg-[#d3b6ff] transition ease-in-out duration-500"
      >
        Projects
      </NavLink>
    </div>
  );
};

export default Navbar;

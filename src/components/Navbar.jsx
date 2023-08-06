import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-atkinson flex justify-end gap-5 bg-black text-gray-300 w-full p-3 pr-5">
      <NavLink
        exact
        to="/"
        className="[&.active]:bg-gray-300 [&.active]:text-black [&.active]:font-semibold p-1 px-3 rounded-md hover:bg-gray-300 hover:text-black hover:font-semibold transition ease-in-out duration-500"
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/about"
        className="[&.active]:bg-gray-300 [&.active]:text-black [&.active]:font-semibold p-1 px-3 rounded-md  hover:bg-gray-300 hover:text-black hover:font-semibold transition ease-in-out duration-500"
      >
        About
      </NavLink>
      <NavLink
        exact
        to="/projects"
        className="[&.active]:bg-gray-300 [&.active]:text-black [&.active]:font-semibold p-1 px-3 rounded-md  hover:bg-gray-300 hover:text-black hover:font-semibold transition ease-in-out duration-500"
      >
        Projects
      </NavLink>
    </div>
  );
};

export default Navbar;

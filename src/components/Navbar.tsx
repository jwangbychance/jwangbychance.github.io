import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-open-sans text-sm w-full flex justify-center md:gap-3 px-3 border border-b-gray-200 shadow-md">
      <img
        className="mr-auto h-10 md:h-14 self-center"
        src="/assets/logo.png"
      ></img>
      <div className="mr-auto p-5 flex gap-3 md:-ml-24">
        <NavLink
          to="/"
          className="[&.active]:bg-[#8b3dff] [&.active]:text-white [&.active]:font-semibold p-2 px-4 rounded-md hover:bg-[#d3b6ff] hover:translate-y-[-0.25rem] transition ease-in-out duration-500"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="[&.active]:bg-[#8b3dff] [&.active]:text-white [&.active]:font-semibold p-2 px-4 rounded-md hover:bg-[#d3b6ff] hover:translate-y-[-0.25rem] transition ease-in-out duration-500"
        >
          About
        </NavLink>
        <NavLink
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

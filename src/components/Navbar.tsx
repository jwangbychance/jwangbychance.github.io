import CustomNavLink from "../common/CustomNavLink";
import ReactSVG from "../../public/svgs/ReactSVG";
import TailwindCSS from "../../public/svgs/TailwindCSS";
import TypeScriptSVG from "../../public/svgs/TypeScriptSVG";

const Navbar = () => {
  return (
    <div className="font-open-sans text-sm w-full flex justify-center md:gap-3 px-3 border border-b-gray-200 shadow-md">
      <img
        className="absolute left-1 h-10 md:h-14 self-center"
        src="/assets/logo.png"
      ></img>
      <div className="ml-auto md:ml-0 py-1 px-2 md:px-3 md:py-2 flex md:gap-3 md:text-sm bg-[#F0F0F0] shadow-sm my-2 rounded-full text-xs">
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/about">About</CustomNavLink>
        <CustomNavLink to="/projects">Projects</CustomNavLink>
      </div>
      <div className="hidden md:flex absolute right-3 self-center w-28 gap-3">
        <TypeScriptSVG />
        <ReactSVG />
        <TailwindCSS />
      </div>
    </div>
  );
};

export default Navbar;

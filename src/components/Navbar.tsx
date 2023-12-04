import CustomNavLink from "../common/CustomNavLink";

const Navbar = () => {
  return (
    <div className="font-open-sans text-sm w-full flex justify-center md:gap-3 px-3 border border-b-gray-200 shadow-md">
      <img
        className="mr-auto h-10 md:h-14 self-center"
        src="/assets/logo.png"
      ></img>
      <div className="mr-auto px-3 py-2 flex gap-3 md:-ml-24 bg-[#F0F0F0] shadow-sm m-2 rounded-full">
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/about">About</CustomNavLink>
        <CustomNavLink to="/projects">Projects</CustomNavLink>
      </div>
    </div>
  );
};

export default Navbar;

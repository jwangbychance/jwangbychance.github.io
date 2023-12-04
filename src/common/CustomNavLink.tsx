import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface CustomNavLinkProps {
  to: string;
  children: ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <NavLink
      to={to}
      className={`${
        isActive
          ? `[&.active]:bg-[#8b3dff] [&.active]:text-white [&.active]:font-semibold`
          : `hover:bg-[#d3b6ff] hover:translate-y-[-0.25rem]`
      } p-2 px-4 rounded-full transition ease-in-out duration-500`}
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;

import Link from "next/link";
import React from "react";

interface NavLinkProps {
  url: string;
  children: React.ReactNode
}


const NavLink: React.FC<NavLinkProps> = ({url, children}) => {
  return (
    <Link
      href={url}
      className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      {children}
    </Link>
  );
};

export default NavLink;

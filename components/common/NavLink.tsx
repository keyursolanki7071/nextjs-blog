'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  url: string;
  children: React.ReactNode
}


const NavLink: React.FC<NavLinkProps> = ({url, children}) => {
  const pathname = usePathname();

  return (
    <Link
      href={url}
      className={`${pathname == url ? "border-indigo-500 border-b-2" : ""} text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

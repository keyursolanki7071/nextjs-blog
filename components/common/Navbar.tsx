import Link from "next/link";
import NavLink from "./NavLink";
import HamBtn from "./HamBtn";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href={"/"}>
                <span className="text-xl font-bold text-gray-900">
                  Blog<span className="text-indigo-600">App</span>
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink url="/">Home</NavLink>
              <NavLink url="/blog">All Blogs</NavLink>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href={"/blog/new"}>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Create Blog
              </button>
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <HamBtn></HamBtn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

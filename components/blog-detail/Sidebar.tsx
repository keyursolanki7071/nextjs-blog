const Sidebar = () => {
  return (
    <aside className="lg:w-1/3 mt-10 lg:mt-0">
      {/* <!-- Categories Widget --> */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center justify-between text-gray-700 hover:text-indigo-600"
            >
              <span>Web Development</span>
              <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                28
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between text-gray-700 hover:text-indigo-600"
            >
              <span>JavaScript</span>
              <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                19
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between text-gray-700 hover:text-indigo-600"
            >
              <span>React</span>
              <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                14
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between text-gray-700 hover:text-indigo-600"
            >
              <span>CSS & Design</span>
              <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                12
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between text-gray-700 hover:text-indigo-600"
            >
              <span>Career Advice</span>
              <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                8
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

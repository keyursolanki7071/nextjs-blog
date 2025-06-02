import { fetchAllCategories } from "@/services/category";

const Sidebar = async () => {
  const categories = await fetchAllCategories();

  if (categories?.length) {
    return (
      <aside className="lg:w-1/3 mt-10 lg:mt-0">
        {/* <!-- Categories Widget --> */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id} >
                <a
                  href="#"
                  className="flex items-center justify-between text-gray-700 hover:text-indigo-600"
                >
                  <span>{category.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }
  return "";
};

export default Sidebar;

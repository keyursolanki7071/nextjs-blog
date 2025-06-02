import BlogCard from "@/components/blog/BlogCard";

const Page = () => {
  return <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       

        {/* <!-- Filter Section --> */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">All Blog Posts</h2>
            <div className="flex space-x-4">
                <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>All Categories</option>
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>Cloud Computing</option>
                    <option>DevOps</option>
                    <option>Artificial Intelligence</option>
                </select>
                <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>Latest</option>
                    <option>Most Popular</option>
                    <option>Oldest</option>
                </select>
            </div>
        </div>

        {/* <!-- Blog Grid --> */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
        </div>
    </main>;
};

export default Page;

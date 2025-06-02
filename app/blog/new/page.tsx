const Page = () => {
    return <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Blog</h1>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8">
                <form action="#" method="POST" className="space-y-8">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Post Title</label>
                        <div className="mt-1">
                            <input type="text" name="title" id="title" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter a descriptive title" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">URL Slug</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input type="text" name="slug" id="slug" className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300" placeholder="your-post-title" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                            <div className="mt-1">
                                <select id="category" name="category" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                    <option value="">Select a category</option>
                                    <option value="web-dev">Web Development</option>
                                    <option value="mobile-dev">Mobile Development</option>
                                    <option value="cloud">Cloud Computing</option>
                                    <option value="devops">DevOps</option>
                                    <option value="ai">Artificial Intelligence</option>
                                    <option value="security">Security</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
                            <div className="mt-1">
                                <input type="text" name="tags" id="tags" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="javascript, react, tutorial (comma separated)" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">Blog Content</label>
                        <div className="mt-1">
                            <textarea id="content" name="content" rows="12" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Write your blog post content here..."></textarea>
                        </div>
                    </div>

                    <div className="pt-5 flex justify-end space-x-3">
                        <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cancel
                        </button>
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
}

export default Page;
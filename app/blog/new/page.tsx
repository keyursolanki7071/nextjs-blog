"use client";
import Editor from "@/components/blog-detail/Editor";
import { fetchAllCategories } from "@/services/category";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    fetchAllCategories().then((data) => {
      setCategories(data ?? []);
    });
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    tags: "",
    content: "",
  });

  const createPost = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(content);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Blog
          </h1>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <form onSubmit={createPost} className="space-y-8">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Title"
                  name="title"
                  onInput={(e) =>
                    setFormData({
                      ...formData,
                      [e.currentTarget.name]: e.currentTarget.value,
                    })
                  }
                  value={formData.title}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="slug"
                className="block text-sm font-medium text-gray-700"
              >
                Slug
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="slug"
                  type="text"
                  placeholder="Slug"
                  name="slug"
                  onInput={(e) =>
                    setFormData({
                      ...formData,
                      [e.currentTarget.name]: e.currentTarget.value,
                    })
                  }
                  value={formData.slug}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <div className="mt-1">
                  <select
                    id="category"
                    name="category"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.currentTarget.name]: e.currentTarget.value,
                      })
                    }
                    value={formData.category}
                  >
                    <option value="">Select a category</option>
                    {categories?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tags
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="javascript, react, tutorial (comma separated)"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.currentTarget.name]: e.currentTarget.value,
                      })
                    }
                    value={formData.tags}
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Content
              </label>
              <div className="mt-1">
                <Editor content={content} setContent={setContent}></Editor>
              </div>
            </div>

            <div className="pt-5 flex justify-end space-x-3">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;

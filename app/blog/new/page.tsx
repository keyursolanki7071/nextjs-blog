"use client";
import Editor from "@/components/blog-detail/Editor";
import { create } from "@/services/blog";
import { fetchAllCategories } from "@/services/category";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
interface FormValues {
  title: string;
  slug: string;
  category_id: string;
  tags: string;
  content: string;
}

const validationSchema = Yup.object({
  title: Yup.string().required("Please enter title"),
  slug: Yup.string().required("Please enter slug"),
  category_id: Yup.string().required("Please select category"),
  tags: Yup.string().required("Please enter tags"),
  content: Yup.string().required("Please enter content"),
});

const Page = () => {
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchAllCategories().then((data) => {
      setCategories(data ?? []);
    });
  }, []);

  useEffect(() => {
    formik.setFieldValue("content", content);
  }, [content]);

  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      slug: "",
      category_id: "",
      tags: "",
      content: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setSubmitting(true);
        await create(values);
        setSubmitting(false);
        formik.resetForm();
        router.push('/blog');
      } catch (error) {
        setSubmitting(false);
        alert(error);
      }
    },
  });
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Blog
          </h1>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <form onSubmit={formik.handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title*
              </label>
              <div className="mt-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title && (
                  <div className="text-red-500">{formik.errors.title}</div>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="slug"
                className="block text-sm font-medium text-gray-700"
              >
                Slug*
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="slug"
                  type="text"
                  placeholder="Slug"
                  name="slug"
                  onChange={formik.handleChange}
                  value={formik.values.slug}
                />
              </div>
              {formik.touched.slug && formik.errors.slug && (
                <div className="text-red-500">{formik.errors.slug}</div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category*
                </label>
                <div className="mt-1">
                  <select
                    id="category"
                    name="category_id"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formik.values.category_id}
                    onChange={formik.handleChange}
                  >
                    <option value="">Select a category</option>
                    {categories?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.category_id && formik.errors.category_id && (
                    <div className="text-red-500">
                      {formik.errors.category_id}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tags*
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="javascript, react, tutorial (comma separated)"
                    onChange={formik.handleChange}
                    value={formik.values.tags}
                  />
                  {formik.touched.tags && formik.errors.tags && (
                    <div className="text-red-500">{formik.errors.tags}</div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Content*
              </label>
              <div className="mt-1">
                <Editor content={content} setContent={setContent}></Editor>
                {formik.touched.content && formik.errors.content && (
                  <div className="text-red-500">{formik.errors.content}</div>
                )}
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
                disabled={submitting}
                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white 
    ${
      submitting
        ? "bg-indigo-400 cursor-not-allowed"
        : "bg-indigo-600 hover:bg-indigo-700"
    } 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {submitting ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;

import React from "react";

interface BlogCardProps {
  title: string;
  content: string;
}

const BlogCard:React.FC<BlogCardProps> = ({title, content}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02]">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <a href="#" className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {title}
            </p>
            <p className="mt-3 text-base text-gray-500" dangerouslySetInnerHTML={{__html: content.substring(0, 50)}}>
            </p>
          </a>
        </div>
       
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";
import Button from "@components/common/Button";

const BlogPostList = ({ blogs }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Blog Post List</h3>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">All Posts</h4>
            <Button>New Post</Button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <h5 className="font-medium mb-1">{blog.title}</h5>
              <p className="text-sm text-gray-600 mb-2">{blog.content}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mx-2">•</span>
                <span>{blog.published_date} </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostList;

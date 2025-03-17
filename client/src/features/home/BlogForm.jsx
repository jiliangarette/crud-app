const BlogForm = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Create/Edit Form</h3>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h4 className="font-medium">New Blog Post</h4>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter post title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              rows={5}
              placeholder="Enter post content"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Author
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter author name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags (comma separated)
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="technology, tutorial, react"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
              Save Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;

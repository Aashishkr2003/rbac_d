import { useState } from "react";

const ContentManagement = () => {
  
  const [content] = useState([
    { id: 1, title: "Welcome to Our Platform", type: "Page", status: "Published", author: "John Doe", lastModified: "2024-01-15", views: 1250 },
    { id: 2, title: "Getting Started Guide", type: "Post", status: "Draft", author: "Jane Smith", lastModified: "2024-01-14", views: 890 },
    { id: 3, title: "Privacy Policy", type: "Page", status: "Published", author: "Legal Team", lastModified: "2024-01-10", views: 456 },
    { id: 4, title: "Latest Product Updates", type: "Post", status: "Published", author: "Alice Brown", lastModified: "2024-01-12", views: 2100 },
    { id: 5, title: "Terms of Service", type: "Page", status: "Review", author: "Legal Team", lastModified: "2024-01-08", views: 234 }
  ]);

  
  const contentStats = {
    total: content.length,
    published: content.filter(item => item.status === "Published").length,
    draft: content.filter(item => item.status === "Draft").length,
    review: content.filter(item => item.status === "Review").length,
    totalViews: content.reduce((sum, item) => sum + item.views, 0)
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="bg-white p-4 lg:p-6 shadow rounded-lg">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Content Management</h2>
        <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">Create, edit, and manage all your content from this central hub.</p>
        
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 mb-4 lg:mb-6">
          <div className="bg-blue-50 p-3 lg:p-4 rounded border">
            <h3 className="font-semibold text-blue-800 text-xs lg:text-sm">Total Content</h3>
            <p className="text-lg lg:text-2xl font-bold text-blue-600">{contentStats.total}</p>
          </div>
          <div className="bg-green-50 p-3 lg:p-4 rounded border">
            <h3 className="font-semibold text-green-800 text-xs lg:text-sm">Published</h3>
            <p className="text-lg lg:text-2xl font-bold text-green-600">{contentStats.published}</p>
          </div>
          <div className="bg-yellow-50 p-3 lg:p-4 rounded border">
            <h3 className="font-semibold text-yellow-800 text-xs lg:text-sm">Drafts</h3>
            <p className="text-lg lg:text-2xl font-bold text-yellow-600">{contentStats.draft}</p>
          </div>
          <div className="bg-purple-50 p-3 lg:p-4 rounded border">
            <h3 className="font-semibold text-purple-800 text-xs lg:text-sm">In Review</h3>
            <p className="text-lg lg:text-2xl font-bold text-purple-600">{contentStats.review}</p>
          </div>
          <div className="bg-indigo-50 p-3 lg:p-4 rounded border col-span-2 sm:col-span-1">
            <h3 className="font-semibold text-indigo-800 text-xs lg:text-sm">Total Views</h3>
            <p className="text-lg lg:text-2xl font-bold text-indigo-600">{contentStats.totalViews.toLocaleString()}</p>
          </div>
        </div>

        
        <div className="grid grid-cols-2 lg:flex gap-2 lg:gap-4 mb-4 lg:mb-6">
          <button className="bg-blue-500 text-white px-3 lg:px-4 py-2 rounded hover:bg-blue-600 text-sm lg:text-base">
            Create Post
          </button>
          <button className="bg-green-500 text-white px-3 lg:px-4 py-2 rounded hover:bg-green-600 text-sm lg:text-base">
            Create Page
          </button>
          <button className="bg-purple-500 text-white px-3 lg:px-4 py-2 rounded hover:bg-purple-600 text-sm lg:text-base">
            Media Library
          </button>
          <button className="bg-orange-500 text-white px-3 lg:px-4 py-2 rounded hover:bg-orange-600 text-sm lg:text-base">
            SEO Settings
          </button>
        </div>

        
        <div className="hidden lg:block overflow-x-auto mb-6">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Author</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Last Modified</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Views</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {content.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">{item.title}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.type === 'Post' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.status === 'Published' ? 'bg-green-100 text-green-800' :
                      item.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{item.author}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.lastModified}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.views.toLocaleString()}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex gap-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                        Edit
                      </button>
                      <button className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600">
                        View
                      </button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="lg:hidden space-y-4 mb-6">
          {content.map(item => (
            <div key={item.id} className="bg-gray-50 p-4 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-base lg:text-lg pr-2">{item.title}</h3>
                <span className="text-gray-500 text-xs">{item.views.toLocaleString()} views</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  item.type === 'Post' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {item.type}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  item.status === 'Published' ? 'bg-green-100 text-green-800' :
                  item.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-3">
                <p>By {item.author} • {item.lastModified}</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 flex-1">
                  Edit
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 flex-1">
                  View
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 flex-1">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="text-base lg:text-lg font-bold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm lg:text-base">📝 Write New Article</button>
              <button className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm lg:text-base">📄 Create Landing Page</button>
              <button className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm lg:text-base">🎨 Upload Media</button>
              <button className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm lg:text-base">🔍 SEO Optimization</button>
              <button className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm lg:text-base">📊 Content Analytics</button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="text-base lg:text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs lg:text-sm gap-1">
                <span>"Welcome Guide" was published</span>
                <span className="text-gray-500">2h ago</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs lg:text-sm gap-1">
                <span>"Product Updates" was edited</span>
                <span className="text-gray-500">4h ago</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs lg:text-sm gap-1">
                <span>"Privacy Policy" was reviewed</span>
                <span className="text-gray-500">1d ago</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs lg:text-sm gap-1">
                <span>New media files uploaded</span>
                <span className="text-gray-500">2d ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;

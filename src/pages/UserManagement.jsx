import { useState } from "react";

const UserManagement = () => {
  
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Viewer", status: "Inactive" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "Active" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Viewer", status: "Active" }
  ]);

  
  const roleStats = {
    Admin: users.filter(user => user.role === "Admin").length,
    Editor: users.filter(user => user.role === "Editor").length,
    Viewer: users.filter(user => user.role === "Viewer").length,
    Active: users.filter(user => user.status === "Active").length,
    Inactive: users.filter(user => user.status === "Inactive").length
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="bg-white p-4 lg:p-6 shadow rounded-lg">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">User Management</h2>
        <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">Manage users, roles, and permissions here.</p>
        
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 mb-4 lg:mb-6">
          <div className="bg-blue-50 p-3 lg:p-4 rounded border">
            <h3 className="font-semibold text-blue-800 text-xs lg:text-sm">Total Users</h3>
            <p className="text-lg lg:text-2xl font-bold text-blue-600">{users.length}</p>
          </div>
          <div className="bg-green-50 p-3 lg:p-4 rounded border">
            <h3 className="font-semibold text-green-800 text-xs lg:text-sm">Admins</h3>
            <p className="text-lg lg:text-2xl font-bold text-green-600">{roleStats.Admin}</p>
          </div>
          <div className="bg-purple-50 p-3 lg:p-4 rounded border">
            <h3 className="font-semibold text-purple-800 text-xs lg:text-sm">Editors</h3>
            <p className="text-lg lg:text-2xl font-bold text-purple-600">{roleStats.Editor}</p>
          </div>
          <div className="bg-orange-50 p-3 lg:p-4 rounded border">
            <h3 className="font-semibold text-orange-800 text-xs lg:text-sm">Viewers</h3>
            <p className="text-lg lg:text-2xl font-bold text-orange-600">{roleStats.Viewer}</p>
          </div>
          <div className="bg-teal-50 p-3 lg:p-4 rounded border col-span-2 sm:col-span-1">
            <h3 className="font-semibold text-teal-800 text-xs lg:text-sm">Active</h3>
            <p className="text-lg lg:text-2xl font-bold text-teal-600">{roleStats.Active}</p>
          </div>
        </div>

        
        <div className="flex flex-wrap gap-2 lg:gap-4 mb-4 lg:mb-6">
          <button className="bg-blue-500 text-white px-3 lg:px-4 py-2 rounded hover:bg-blue-600 text-sm lg:text-base">
            Add New User
          </button>
          <button className="bg-green-500 text-white px-3 lg:px-4 py-2 rounded hover:bg-green-600 text-sm lg:text-base">
            Bulk Actions
          </button>
          <button className="bg-purple-500 text-white px-3 lg:px-4 py-2 rounded hover:bg-purple-600 text-sm lg:text-base">
            Export Users
          </button>
        </div>

        
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      user.role === 'Admin' ? 'bg-red-100 text-red-800' :
                      user.role === 'Editor' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex gap-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                        Edit
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

        
        <div className="lg:hidden space-y-4">
          {users.map(user => (
            <div key={user.id} className="bg-gray-50 p-4 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
                <span className="text-gray-500 text-sm">#{user.id}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  user.role === 'Admin' ? 'bg-red-100 text-red-800' :
                  user.role === 'Editor' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {user.role}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {user.status}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 flex-1">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 flex-1">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-6 lg:mt-8">
          <h3 className="text-lg lg:text-xl font-bold mb-4">Recent Activity</h3>
          <div className="bg-gray-50 p-4 rounded">
            <ul className="space-y-2">
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm lg:text-base">John Doe was assigned Admin role</span>
                <span className="text-gray-500 text-xs lg:text-sm">2 hours ago</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm lg:text-base">Jane Smith updated profile</span>
                <span className="text-gray-500 text-xs lg:text-sm">4 hours ago</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm lg:text-base">Bob Johnson account deactivated</span>
                <span className="text-gray-500 text-xs lg:text-sm">1 day ago</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm lg:text-base">Alice Brown created new account</span>
                <span className="text-gray-500 text-xs lg:text-sm">2 days ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
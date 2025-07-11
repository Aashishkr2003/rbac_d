import { useRole } from "../context/RoleContext";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { role } = useRole();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getRoleIcon = () => {
    switch(role) {
      case "Admin": return "👑";
      case "Editor": return "✏️";
      case "Viewer": return "👁️";
      default: return "👤";
    }
  };

  const getRoleColor = () => {
    switch(role) {
      case "Admin": return "from-red-500 to-pink-500";
      case "Editor": return "from-yellow-500 to-orange-500";
      case "Viewer": return "from-blue-500 to-cyan-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <aside className={`
      fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-slate-50 to-slate-100 shadow-xl border-r border-slate-200
      transform transition-transform duration-300 ease-in-out lg:transform-none
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="p-4 lg:p-6">
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-lg font-bold text-slate-800">Menu</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md hover:bg-slate-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={`bg-gradient-to-r ${getRoleColor()} p-3 lg:p-4 rounded-xl shadow-lg mb-4 lg:mb-6`}>
          <div className="flex items-center space-x-3 text-white">
            <span className="text-xl lg:text-2xl">{getRoleIcon()}</span>
            <div>
              <p className="font-bold text-base lg:text-lg">{role}</p>
              <p className="text-xs lg:text-sm opacity-90">Access Level</p>
            </div>
          </div>
        </div>

        <nav>
          <ul className="space-y-2 lg:space-y-3">
            {role === "Viewer" && (
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className={`group flex items-center space-x-3 p-3 lg:p-4 rounded-xl transition-all duration-200 ${
                    isActive('/') 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transform scale-105' 
                      : 'hover:bg-white hover:shadow-md text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <span className="text-lg lg:text-xl">📊</span>
                  <span className="font-medium text-sm lg:text-base">Dashboard Overview</span>
                  {isActive('/') && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>
              </li>
            )}
            {role === "Editor" && (
              <li>
                <Link
                  to="/content"
                  onClick={handleLinkClick}
                  className={`group flex items-center space-x-3 p-3 lg:p-4 rounded-xl transition-all duration-200 ${
                    isActive('/content') 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg transform scale-105' 
                      : 'hover:bg-white hover:shadow-md text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <span className="text-lg lg:text-xl">📝</span>
                  <span className="font-medium text-sm lg:text-base">Content Management</span>
                  {isActive('/content') && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>
              </li>
            )}
            {role === "Admin" && (
              <li>
                <Link
                  to="/users"
                  onClick={handleLinkClick}
                  className={`group flex items-center space-x-3 p-3 lg:p-4 rounded-xl transition-all duration-200 ${
                    isActive('/users') 
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg transform scale-105' 
                      : 'hover:bg-white hover:shadow-md text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <span className="text-lg lg:text-xl">👥</span>
                  <span className="font-medium text-sm lg:text-base">User Management</span>
                  {isActive('/users') && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Role Description */}
        <div className="mt-6 lg:mt-8 p-3 lg:p-4 bg-white rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-2 text-sm lg:text-base">Role Permissions</h3>
          <div className="text-xs lg:text-sm text-slate-600 space-y-1">
            {role === "Admin" && (
              <>
                <p>✅ Manage all users</p>
                <p>✅ Assign roles & permissions</p>
                <p>✅ System administration</p>
              </>
            )}
            {role === "Editor" && (
              <>
                <p>✅ Create & edit content</p>
                <p>✅ Publish articles</p>
                <p>✅ Manage media library</p>
              </>
            )}
            {role === "Viewer" && (
              <>
                <p>✅ View dashboard analytics</p>
                <p>✅ Access reports</p>
                <p>❌ Limited editing access</p>
              </>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

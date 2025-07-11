import { useRole } from "../context/RoleContext";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { role, switchRole, loading, user } = useRole();

  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-lg">
      <div className="px-4 lg:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 lg:space-x-4">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-lg lg:text-xl font-bold">R</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              RBAC Dashboard
            </h1>
            {user && (
              <p className="text-xs lg:text-sm text-slate-300">
                Welcome back, {user.name}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-6">
          {loading && (
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm text-slate-300">Loading...</span>
            </div>
          )}

          <div className="flex items-center space-x-2 lg:space-x-3">
            <span className="hidden md:block text-sm font-medium text-slate-300">
              Role:
            </span>
            <div className="relative">
              <select
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-2 lg:px-4 py-1 lg:py-2 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                         hover:bg-white/20 transition-all duration-200 cursor-pointer font-medium text-sm lg:text-base"
                value={role}
                onChange={(e) => switchRole(e.target.value)}
                disabled={loading}
              >
                <option
                  value="Admin"
                  className="bg-slate-800 text-white"
                >
                  👑 Admin
                </option>
                <option
                  value="Editor"
                  className="bg-slate-800 text-white"
                >
                  ✏️ Editor
                </option>
                <option
                  value="Viewer"
                  className="bg-slate-800 text-white"
                >
                  👁️ Viewer
                </option>
              </select>
            </div>
          </div>

          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold">
              {user?.name?.charAt(0) || "U"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

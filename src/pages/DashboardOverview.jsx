const DashboardOverview = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="bg-white p-4 lg:p-6 shadow rounded-lg">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Dashboard Overview</h2>
        <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">View analytics, reports, and summaries here.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-indigo-50 p-4 rounded border">
            <h3 className="font-semibold text-indigo-800 text-sm lg:text-base">Total Users</h3>
            <p className="text-xl lg:text-2xl font-bold text-indigo-600">1,234</p>
          </div>
          <div className="bg-pink-50 p-4 rounded border">
            <h3 className="font-semibold text-pink-800 text-sm lg:text-base">Active Sessions</h3>
            <p className="text-xl lg:text-2xl font-bold text-pink-600">89</p>
          </div>
          <div className="bg-teal-50 p-4 rounded border sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-teal-800 text-sm lg:text-base">Monthly Revenue</h3>
            <p className="text-xl lg:text-2xl font-bold text-teal-600">$12,345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

import React from 'react'
import { Car } from "lucide-react";

const DashboardContent = () => {
  const stats = [
    { title: 'Total Vehicles', value: '124', change: '+12%', color: 'bg-blue-500' },
    { title: 'Active Drivers', value: '89', change: '+5%', color: 'bg-green-500' },
    { title: 'Total Miles', value: '45,678', change: '+8%', color: 'bg-purple-500' },
    { title: 'Fuel Efficiency', value: '28.5 MPG', change: '+2%', color: 'bg-orange-500' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
          Add Vehicle
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <Car className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-600 dark:text-green-400 text-sm font-medium">{stat.change}</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { vehicle: 'Vehicle #001', driver: 'John Smith', action: 'Started trip', time: '2 mins ago' },
              { vehicle: 'Vehicle #045', driver: 'Sarah Johnson', action: 'Completed maintenance', time: '15 mins ago' },
              { vehicle: 'Vehicle #023', driver: 'Mike Davis', action: 'Fuel refill', time: '1 hour ago' },
              { vehicle: 'Vehicle #067', driver: 'Emma Wilson', action: 'Route completed', time: '2 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <Car className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.vehicle}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.driver} • {activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardContent
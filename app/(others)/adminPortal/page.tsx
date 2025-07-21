// (Protected)/layout.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, Bell, Search, User, Settings, LogOut, Car, BarChart3, Map, Users, FileText, Calendar, Component } from 'lucide-react';
import Admin_MembershipBenefits from '@/components/AdminComponents/Admin_MembershipBenefits';
import Admin_Services from '@/components/AdminComponents/Admin_Services';
import Admin_HowItWorks from '@/components/AdminComponents/Admin_HowItWorks';
import Admin_Testimonial from '@/components/AdminComponents/Admin_Testimonial';
import Admin_Pricing from '@/components/AdminComponents/Admin_Pricing';
import Admin_FAQS from '@/components/AdminComponents/Admin_FAQS';

const Header = ({ onMenuToggle, sidebarOpen }) => {
  const router = useRouter();
  const handleLogout = () => {
    // Clear any auth tokens/session data here
    localStorage.removeItem('authToken'); // Example
    router.push('/login');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">FleetBold</h1>
        </div>

        {/* <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div> */}

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 relative">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="relative group">
            <button className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="hidden md:block text-sm font-medium">John Doe</span>
            </button>
            
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Settings
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Sidebar = ({ isOpen, onClose, activeItem, setActiveItem ,setActiveComponent}) => {
  const router = useRouter();

  const menuItems = [
    // { id: 'dashboard', label: 'Dashboard', icon: BarChart3, href: '/dashboard' },
    { id: 'membershipbenefits', label: 'Membership Benefits', icon: Settings, component:<Admin_MembershipBenefits/>},
    { id: 'services', label: 'Services', icon: Map, component:<Admin_Services/> },
    { id: 'howitworks', label: 'How It Works', icon: Users,component:<Admin_HowItWorks/>},
    { id: 'testimonial', label: 'Testimonial', icon: FileText, component:<Admin_Testimonial/>},
    { id: 'pricing', label: 'Pricing', icon: Calendar,component:<Admin_Pricing/> },
    { id: 'faq', label: 'FAQs', icon: Settings, component:<Admin_FAQS/> },
  ];

  const handleNavigation = (item) => {
    setActiveItem(item.id);
    setActiveComponent(item.component)
    //router.push(item.href);
    onClose(); // Close sidebar on mobile after navigation
  };

  const handleLogout = () => {
    // Clear any auth tokens/session data here
    localStorage.removeItem('authToken'); // Example
    router.push('/login');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              ×
            </button>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                    activeItem === item.id
                      ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
          
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ProtectedLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('membershipbenefits');
  const [activeComponent,setActiveComponent]=useState(<Admin_MembershipBenefits/>)
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        // if (!token) {
        //   router.push('/login');
        //   return;
        // }

      
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Set active menu item based on current path
  // useEffect(() => {
  //   const path = window.location.pathname;
  //   if (path.includes('/membershipBenefits')) setActiveMenuItem('membershipbenefits');
   
  // }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // Not authenticated - this shouldn't show as we redirect, but just in case
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onMenuToggle={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={closeSidebar}
          activeItem={activeMenuItem}
          setActiveItem={setActiveMenuItem}
          setActiveComponent={setActiveComponent}
        />
        <main className="flex-1 lg:ml-0">
        {activeComponent}
        </main>
      </div>
    </div>
  );
};
export default ProtectedLayout

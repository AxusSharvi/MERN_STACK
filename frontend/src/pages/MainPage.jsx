// In src/components/dashboardComponents/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // 👈 Import Outlet
import SideNav from '../components/resusableComponents/SideNav';
import TopBar from '../components/dashboardComponents/TopBar';

function MainPage() {
  return (
    <div className="min-h-screen min-w-full flex bg-white">
      <SideNav />

      <main className="flex-1">
        <TopBar />
        
        {/* 👇 This is the magic placeholder. 
          React Router will render your page components (like AuthorPage) here.
        */}
        <div className="p-4"> {/* Optional: padding for your content area */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
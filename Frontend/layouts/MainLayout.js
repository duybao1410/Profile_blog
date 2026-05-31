import React from 'react';

export const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* Navigation/Header */}
      <nav className="navbar">{/* Navbar content */}</nav>
      
      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">{/* Sidebar content */}</aside>
        
        {/* Main content */}
        <main className="content">{children}</main>
      </div>
      
      {/* Footer */}
      <footer className="footer">{/* Footer content */}</footer>
    </div>
  );
};

export default MainLayout;

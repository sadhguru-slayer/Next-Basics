import React from "react";
const Layout = ({ children, modal }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      
      {/* Header */}
      <header className="bg-white shadow p-4 sticky top-0 z-50">
        
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <h1 className="text-2xl font-bold">📸 PhotoFeed</h1>
          <nav className="space-x-4">
            
            <a href="#" className="text-blue-600 hover:underline">
              Home
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Upload
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Profile
            </a>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-6">
        
        {children} {modal}
      </main>
      {/* Footer */}
      <footer className="bg-white border-t mt-10 p-4 text-center text-sm text-gray-500">
        
        &copy; {new Date().getFullYear()} PhotoFeed. All rights reserved.
      </footer>
    </div>
  );
};
export default Layout;

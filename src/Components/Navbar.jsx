import React, { useState } from 'react';

const Navbar = () => {
  // State to toggle the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <nav className="bg-gray-500 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Empty for alignment */}
        


        {/* Middle: Links for Home, About, Cart */}
        <div className=" space-x-8  hidden md:flex">
          <a href="#" className="text-white text-2xl hover:text-gray-400">Home</a>
          <a href="#" className="text-white text-2xl hover:text-gray-400">Login</a>
          <a href="#" className="text-white text-2xl hover:text-gray-400">
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </a>
        </div>
        
        {/* Right: Search Bar (Visible only on medium screens and above) */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Mobile Hamburger Icon (Hidden on large screens) */}
        <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white px-4">
            {/* Show hamburger icon when mobile menu is closed */}
            {!isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              // Show cross icon when mobile menu is open
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile View Menu (Shows when `isMobileMenuOpen` is true) */}

      {isMobileMenuOpen && (
        <div className="md:hidden  text-white p-4">
          <a href="#" className="block  py-2">Home</a>
          <a href="#" className="block py-2">Login</a>
          <a href="#" className="block py-2">
             <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </a>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 "
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

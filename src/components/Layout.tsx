import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, AccountTree, Menu as MenuIcon, Close } from '@mui/icons-material';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-sf-pro-display font-bold text-gray-900">
                React Challenge - Embryoxite
              </h1>
            </div>


            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-sf-pro ${
                  location.pathname === '/'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link
                to="/tree"
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-sf-pro ${
                  location.pathname === '/tree'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <AccountTree className="w-4 h-4" />
                Tree
              </Link>
            </div>


            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <Close className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } border-b border-gray-200`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={closeMenu}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-sf-pro ${
                location.pathname === '/'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link
              to="/tree"
              onClick={closeMenu}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-sf-pro ${
                location.pathname === '/tree'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <AccountTree className="w-4 h-4" />
              Tree
            </Link>
          </div>
        </div>
      </nav>


      <main className="flex-1 pt-16">
        <Outlet />
      </main>
    </div>
  );
};
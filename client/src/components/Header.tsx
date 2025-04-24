import { useState } from "react";
import { Link, useLocation } from "wouter";
import { HeartPulse, Menu } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <HeartPulse className="text-[#ef4444] h-6 w-6" />
            <span className="font-semibold text-xl">HeartGuard</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/dashboard">
              <a className={`font-medium py-1 ${isActive("/dashboard") || isActive("/") ? "text-[#ef4444] border-b-2 border-[#ef4444]" : "text-gray-600 hover:text-[#ef4444]"}`}>
                Dashboard
              </a>
            </Link>
            <Link href="/alerts">
              <a className={`font-medium py-1 ${isActive("/alerts") ? "text-[#ef4444] border-b-2 border-[#ef4444]" : "text-gray-600 hover:text-[#ef4444]"}`}>
                Alerts
              </a>
            </Link>
            <Link href="/profile">
              <a className={`font-medium py-1 ${isActive("/profile") ? "text-[#ef4444] border-b-2 border-[#ef4444]" : "text-gray-600 hover:text-[#ef4444]"}`}>
                Profile
              </a>
            </Link>
            <Link href="/settings">
              <a className={`font-medium py-1 ${isActive("/settings") ? "text-[#ef4444] border-b-2 border-[#ef4444]" : "text-gray-600 hover:text-[#ef4444]"}`}>
                Settings
              </a>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-500 hover:text-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/dashboard">
                <a 
                  className={`font-medium py-2 border-b border-gray-200 ${isActive("/dashboard") || isActive("/") ? "text-[#ef4444]" : "text-gray-600"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </a>
              </Link>
              <Link href="/alerts">
                <a 
                  className={`font-medium py-2 border-b border-gray-200 ${isActive("/alerts") ? "text-[#ef4444]" : "text-gray-600"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Alerts
                </a>
              </Link>
              <Link href="/profile">
                <a 
                  className={`font-medium py-2 border-b border-gray-200 ${isActive("/profile") ? "text-[#ef4444]" : "text-gray-600"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </a>
              </Link>
              <Link href="/settings">
                <a 
                  className={`font-medium py-2 ${isActive("/settings") ? "text-[#ef4444]" : "text-gray-600"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Settings
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { Link } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from './logo';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="cursor-pointer hover:opacity-80 transition-opacity" data-testid="logo">
                <Logo />
              </div>
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-grey hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden md:flex space-x-8">
            <Link href="/search">
              <span className="text-gray-600 hover:text-blue-grey transition-colors cursor-pointer" data-testid="nav-browse-services">
                Browse Services
              </span>
            </Link>

            {/* Common Home Jobs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-600 hover:text-blue-grey transition-colors cursor-pointer flex items-center"
                data-testid="nav-common-home-jobs"
              >
                Common Home Jobs
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link href="/faq">
                    <span 
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-grey transition-colors cursor-pointer"
                      data-testid="dropdown-faqs"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      FAQs
                    </span>
                  </Link>
                  <Link href="/home-jobs-guide">
                    <span 
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-grey transition-colors cursor-pointer"
                      data-testid="dropdown-home-jobs-guide"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Home Jobs Guide
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about">
              <span className="text-gray-600 hover:text-blue-grey transition-colors cursor-pointer" data-testid="nav-about-us">
                About Us
              </span>
            </Link>
            {/* Your Business Listing Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBusinessDropdownOpen(!isBusinessDropdownOpen)}
                className="text-gray-600 hover:text-blue-grey transition-colors cursor-pointer flex items-center"
                data-testid="nav-your-business-listing"
              >
                Your Business Listing
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isBusinessDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isBusinessDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link href="/list-business">
                    <span 
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-grey transition-colors cursor-pointer"
                      data-testid="dropdown-list-business"
                      onClick={() => setIsBusinessDropdownOpen(false)}
                    >
                      List your Business
                    </span>
                  </Link>
                  <Link href="/renew-business">
                    <span 
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-grey transition-colors cursor-pointer"
                      data-testid="dropdown-renew-business"
                      onClick={() => setIsBusinessDropdownOpen(false)}
                    >
                      Renew Your Business Listing
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 relative z-50">
          <div className="px-4 py-2 space-y-1">
            <Link href="/search">
              <span 
                className="block px-3 py-2 text-gray-600 hover:text-blue-grey hover:bg-gray-50 rounded-md cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-browse-services"
              >
                Browse Services
              </span>
            </Link>
            <Link href="/faq">
              <span 
                className="block px-3 py-2 text-gray-600 hover:text-blue-grey hover:bg-gray-50 rounded-md cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-faqs"
              >
                FAQs
              </span>
            </Link>
            <Link href="/home-jobs-guide">
              <span 
                className="block px-3 py-2 text-gray-600 hover:text-blue-grey hover:bg-gray-50 rounded-md cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-home-jobs-guide"
              >
                Home Jobs Guide
              </span>
            </Link>
            <Link href="/about">
              <span 
                className="block px-3 py-2 text-gray-600 hover:text-blue-grey hover:bg-gray-50 rounded-md cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-about-us"
              >
                About Us
              </span>
            </Link>
            <Link href="/list-business">
              <span 
                className="block px-3 py-2 text-gray-600 hover:text-blue-grey hover:bg-gray-50 rounded-md cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-list-business"
              >
                List your Business
              </span>
            </Link>
            <Link href="/renew-business">
              <span 
                className="block px-3 py-2 text-gray-600 hover:text-blue-grey hover:bg-gray-50 rounded-md cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-renew-business"
              >
                Renew Your Business Listing
              </span>
            </Link>
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown when clicking outside */}
      {(isDropdownOpen || isBusinessDropdownOpen || isMobileMenuOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsDropdownOpen(false);
            setIsBusinessDropdownOpen(false);
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </header>
  );
}
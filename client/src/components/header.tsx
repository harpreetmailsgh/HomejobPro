import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/generated_images/Updated_Homejobspro_logo_design_8be0a3bf.png";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="cursor-pointer hover:opacity-80 transition-opacity" data-testid="logo">
                <img 
                  src={logoImage} 
                  alt="Homejobspro" 
                  className="h-8 w-auto"
                />
              </div>
            </Link>
          </div>
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
            <Link href="/list-business">
              <span className="text-gray-600 hover:text-blue-grey transition-colors cursor-pointer" data-testid="nav-list-business">
                List Your Business
              </span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Backdrop to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
}
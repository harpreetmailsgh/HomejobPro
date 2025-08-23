import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-grey cursor-pointer hover:text-blue-grey-700 transition-colors" data-testid="logo">
                Homejobspro.com
              </h1>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/search">
              <a className="text-gray-600 hover:text-blue-grey transition-colors" data-testid="nav-browse-services">
                Browse Services
              </a>
            </Link>
            <a href="#" className="text-gray-600 hover:text-blue-grey transition-colors" data-testid="nav-how-it-works">
              How It Works
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-grey transition-colors" data-testid="nav-list-business">
              List Your Business
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

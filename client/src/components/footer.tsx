import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" data-testid="footer-title">
              Homejobspro.com
            </h3>
            <p className="text-gray-300 mb-4">
              Connect with trusted home service professionals in your area. Find reliable plumbers, electricians, HVAC technicians, landscapers, and more.
            </p>
            <p className="text-sm text-gray-400" data-testid="sync-status">
              Data synchronized in real-time with Google Sheets
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/search?industry=Plumber">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-plumbing">
                    Plumbing
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/search?industry=Electrician">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-electrical">
                    Electrical
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/search?industry=HVAC%20Technician">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-hvac">
                    HVAC
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/search?industry=Landscaper">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-landscaping">
                    Landscaping
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-link-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-link-contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-link-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-link-terms">
                  Terms of Service
                </a>
              </li>
              <li>
                <Link href="/faq">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-faq">
                    FAQ
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/settings">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-settings">
                    Settings
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Homejobspro.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Safety Information</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Cancellation Options</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">COVID-19 Resources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Disaster Relief</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Support Refugees</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Combating Discrimination</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Try Hosting</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Host Resources</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Responsible Hosting</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Community Forum</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">StayHub</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">About</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Investors</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © 2023 StayHub, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Privacy</Link>
            <Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Terms</Link>
            <Link to="#" className="text-gray-600 hover:text-rose-500 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

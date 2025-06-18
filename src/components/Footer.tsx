import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003057] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/rambln_transparent_logo_full.png" 
                alt="Rambln.AI" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 max-w-md mb-8 leading-relaxed">
              An AI middle-layer that automates standups, recaps meetings, and shortens your sprint cycles. 
              Built for teams who value both efficiency and human connection.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#B3A369] transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#B3A369] transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#B3A369] transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@rambln.ai" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#B3A369] transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-300 hover:text-[#B3A369] transition-colors duration-200">Features</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-[#B3A369] transition-colors duration-200">How It Works</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B3A369] transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B3A369] transition-colors duration-200">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-[#B3A369] transition-colors duration-200">About</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B3A369] transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B3A369] transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B3A369] transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rambln.AI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#B3A369] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#B3A369] transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#B3A369] transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

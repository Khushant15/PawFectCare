import React from 'react';
import { PawPrint, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <PawPrint className="h-8 w-8 text-amber-500 mr-2" />
              <span className="text-2xl font-bold text-white">PawFect <span className="text-amber-500">Care</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to making every dog's life healthier and happier through personalized, expert-vetted care plans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#breed-discovery" className="hover:text-amber-500 transition-colors">Breed Discovery</a></li>
              <li><a href="#treat-recipes" className="hover:text-amber-500 transition-colors">Treat Recipes</a></li>
              <li><a href="#care-plan" className="hover:text-amber-500 transition-colors">Get Doggy Plan</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span>hello@pawfectcare.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span>+1 (555) 123-PAWS</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span>123 Bark Avenue, Dogwood</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} PawFect Care. Made with ❤️ for all the doggoes.</p>
        </div>
      </div>
    </footer>
  );
}
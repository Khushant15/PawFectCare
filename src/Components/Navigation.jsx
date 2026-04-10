import React, { useState } from 'react';
import { PawPrint, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <PawPrint className="h-8 w-8 text-amber-600 mr-2" />
            <span className="text-2xl font-bold text-gray-800 tracking-tight">PawFect <span className="text-amber-600">Care</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-700 font-medium hover:text-amber-600 transition-colors">Home</a>
              <a href="#tools" className="text-gray-700 font-medium hover:text-amber-600 transition-colors">Tools</a>
              <a href="#breed-discovery" className="text-gray-700 font-medium hover:text-amber-600 transition-colors">Breeds</a>
              <a href="#treat-recipes" className="text-gray-700 font-medium hover:text-amber-600 transition-colors">Treats</a>
              <a href="#contact" className="text-gray-700 font-medium hover:text-amber-600 transition-colors">Contact</a>
              <a href="#care-plan" className="bg-amber-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-amber-700 transition-all shadow-md hover:shadow-lg">
                Get Doggy Plan
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-600 rounded-md">Home</a>
            <a href="#tools" className="block px-3 py-2 text-gray-700 hover:text-amber-600 rounded-md">Tools</a>
            <a href="#breed-discovery" className="block px-3 py-2 text-gray-700 hover:text-amber-600 rounded-md">Breeds</a>
            <a href="#treat-recipes" className="block px-3 py-2 text-gray-700 hover:text-amber-600 rounded-md">Treats</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600 rounded-md">Contact</a>
            <button className="w-full text-center bg-amber-600 text-white px-3 py-3 rounded-lg mt-2 font-bold shadow-md">
              Get Doggy Plan
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
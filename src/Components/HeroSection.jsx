import React, { useState } from 'react';
import { PawPrint, Sparkles, ShieldCheck } from 'lucide-react';
import dogImage from '../assets/dog.png';

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#FFFDF5] py-24 lg:py-32">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full text-amber-700 font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Rated #1 for Dog Care Plans</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Personalized Care for your <span className="text-amber-600">Best Friend</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Every dog is unique. Get a custom wellness roadmap tailored to your dog's breed, age, and lifestyle. Expert-vetted health, nutrition, and joy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#care-plan" className="group flex items-center justify-center bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-amber-200">
                <span>Start Doggy Plan</span>
                <PawPrint className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a href="#breed-discovery" className="flex items-center justify-center border-2 border-amber-200 text-amber-700 px-10 py-4 rounded-full text-lg font-bold hover:bg-amber-50 transition-all duration-300">
                Learn More
              </a>
            </div>

            <div className="flex items-center gap-10 pt-6 border-t border-amber-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-amber-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-amber-500 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                </div>
                <p className="text-sm text-gray-600 font-medium font-sans"><span className="font-bold text-gray-900">5,000+</span> happy paws joined us this year</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-amber-400 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl overflow-hidden border border-amber-50">
              {!imageError ? (
                <img 
                  src={dogImage}
                  alt="Premium Golden Retriever"
                  className="w-full h-auto rounded-[2rem] object-cover hover:scale-102 transition-transform duration-700"
                  onError={handleImageError}
                />
              ) : (
                <div className="aspect-[4/5] bg-amber-50 rounded-[2rem] flex items-center justify-center">
                  <PawPrint className="w-24 h-24 text-amber-200" />
                </div>
              )}
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-bounce-slow">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Verified Plan</p>
                    <p className="text-sm font-bold text-gray-900">Expert Vetted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
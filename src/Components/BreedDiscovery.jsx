import React from 'react';
import { Camera, Heart, Info } from 'lucide-react';

const breeds = [
  {
    name: "Golden Retriever",
    trait: "Friendly & Loyal",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400",
    color: "bg-amber-100"
  },
  {
    name: "French Bulldog",
    trait: "Playful & Smart",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
    color: "bg-blue-100"
  },
  {
    name: "German Shepherd",
    trait: "Confident & Brave",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=400",
    color: "bg-orange-100"
  },
  {
    name: "Poodle",
    trait: "Elegant & Active",
    image: "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&q=80&w=400",
    color: "bg-purple-100"
  }
];

export default function BreedDiscovery() {
  return (
    <section id="breed-discovery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Explore Dog <span className="text-amber-600">Breeds</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the unique characteristics and care needs of popular breeds to find your perfect companion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {breeds.map((breed, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={breed.image} 
                  alt={breed.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold">{breed.name}</h3>
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-amber-600 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-amber-300 font-medium flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  {breed.trait}
                </p>
                <button className="mt-4 bg-white text-gray-900 py-2 rounded-xl font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  View Care Guide
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-4 transition-all">
            Browse All 200+ Breeds <Camera className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

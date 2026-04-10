import React from 'react';
import { PawPrint } from 'lucide-react';

export default function CarePlanForm({ formData, handleInputChange, handlePlanSubmit }) {
  const breedOptions = [
    "Labrador Retriever", "Golden Retriever", "German Shepherd", "French Bulldog", "Beagle", "Pug",
    "Rottweiler", "Cocker Spaniel", "Dachshund", "Siberian Husky", "Shih Tzu", "Poodle",
    "Boxer", "Doberman Pinscher", "Great Dane", "Saint Bernard", "Pomeranian",
    "Chihuahua", "Yorkshire Terrier", "Border Collie", "Bulldog", "Mixed Breed"
  ];

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-2">
      <h3 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center gap-3">
        <PawPrint className="text-amber-600 w-8 h-8" />
        <span>Dog Information</span>
      </h3>
      <form onSubmit={handlePlanSubmit} className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Dog's Name *</label>
          <input
            type="text"
            name="dogName"
            value={formData.dogName}
            onChange={handleInputChange}
            className="w-full px-6 py-4 border-2 border-amber-100 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 text-lg transition-all outline-none bg-white"
            placeholder="e.g., Buddy"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Breed *</label>
          <select
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
            className="w-full px-5 py-4 border-2 border-amber-100 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 text-lg transition-all outline-none bg-white appearance-none"
            required
          >
            <option value="">Select breed</option>
            {breedOptions.map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Age (years) *</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-amber-100 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 text-lg transition-all outline-none bg-white"
              placeholder="3"
              min="0"
              max="25"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Weight (lbs) *</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-amber-100 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 text-lg transition-all outline-none bg-white"
              placeholder="45"
              min="1"
              max="250"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Activity Level</label>
          <select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleInputChange}
            className="w-full px-6 py-4 border-2 border-amber-100 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 text-lg transition-all outline-none bg-white appearance-none"
          >
            <option value="">Select activity level</option>
            <option value="low">Low - Mostly indoor / Cuddler</option>
            <option value="moderate">Moderate - Daily walks / Playful</option>
            <option value="high">High - Very energetic / Sporty</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-amber-600 text-white px-8 py-5 rounded-[2rem] text-xl font-bold hover:bg-amber-700 transform hover:scale-102 transition-all duration-300 shadow-xl shadow-amber-200 mt-4 active:scale-95"
        >
          Generate Doggy Plan
        </button>
      </form>
    </div>
  );
}
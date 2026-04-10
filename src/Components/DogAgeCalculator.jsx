import React, { useState } from 'react';
import { Calculator, Baby, User, UserRoundIcon } from 'lucide-react';

export default function DogAgeCalculator() {
  const [dogAge, setDogAge] = useState(3);
  
  // A slightly more complex formula than just x7
  // Human Age = 16 * ln(dog_age) + 31 (Simplified approximation for adult dogs)
  // But for better UX, we use a hybrid model:
  // 1st year = 15 years, 2nd year = 9 years, every year after = 5 years
  const calculateHumanAge = (age) => {
    if (age === 0) return 0;
    if (age === 1) return 15;
    if (age === 2) return 24;
    return 24 + (age - 2) * 5;
  };

  const humanAge = calculateHumanAge(dogAge);

  return (
    <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-amber-100 border border-amber-50 h-full flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-amber-100 p-3 rounded-2xl">
            <Calculator className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Age Calculator</h3>
        </div>
        
        <p className="text-gray-600 font-medium">How many "human years" is your buddy actually?</p>

        <div className="space-y-8 pt-4">
          <div className="space-y-4">
            <div className="flex justify-between font-bold text-sm uppercase tracking-widest text-gray-400">
              <span>Dog Age</span>
              <span className="text-amber-600 text-lg">{dogAge} yrs</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={dogAge} 
              onChange={(e) => setDogAge(parseInt(e.target.value))}
              className="w-full h-3 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
          </div>

          <div className="bg-[#FFFDF5] rounded-3xl p-8 border-2 border-amber-50 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col items-center text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">Human Equivalent</span>
              <div className="text-7xl font-black text-gray-900 group-hover:scale-110 transition-transform duration-500">
                {humanAge}
              </div>
              <span className="text-xl font-bold text-gray-700">Years Old</span>
            </div>
            {/* Background Icon */}
            <UserRoundIcon className="absolute -bottom-4 -right-4 w-24 h-24 text-amber-100/50 group-hover:rotate-12 transition-transform" />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-amber-50 flex items-center justify-between text-xs font-bold text-gray-400">
        <span className="flex items-center gap-1"><Baby className="w-3 h-3" /> Puppy</span>
        <span className="flex items-center gap-1 text-amber-600"><User className="w-3 h-3" /> Senior</span>
      </div>
    </div>
  );
}

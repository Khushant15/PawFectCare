import React from 'react';
import { X, Stethoscope, Heart, Activity, Scissors, ShieldAlert, PawPrint, Download } from 'lucide-react';

export default function CarePlanDisplay({ generatedPlan, setShowPlan, resetForm }) {
  const vaxList = [
    { name: "Rabies", status: "Upcoming", color: "text-amber-600 bg-amber-50" },
    { name: "DHPP", status: "Completed", color: "text-green-600 bg-green-50" },
    { name: "Bordetella", status: "Due Now", color: "text-red-600 bg-red-50" }
  ];

  return (
    <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(251,191,36,0.15)] p-10 max-h-[85vh] overflow-y-auto border border-amber-50 scrollbar-hide animate-in zoom-in-95 duration-500">
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-amber-50">
        <div className="flex items-center gap-4">
          <div className="bg-amber-600 p-3 rounded-2xl shadow-lg shadow-amber-200">
            <PawPrint className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {generatedPlan.dogInfo.name}'s Roadmap
            </h3>
            <p className="text-sm text-gray-500 font-medium italic">Custom Tailored Care Plan</p>
          </div>
        </div>
        <button
          onClick={() => setShowPlan(false)}
          className="bg-gray-50 text-gray-400 hover:text-amber-600 hover:bg-amber-50 p-2.5 rounded-2xl transition-all"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Dog Summary */}
        <div className="bg-amber-50/50 rounded-3xl p-6 border border-amber-100 flex flex-col justify-center">
          <h4 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5" />
             Core Profile
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">Breed</span>
              <p className="font-bold text-gray-800">{generatedPlan.dogInfo.breed}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">Age</span>
              <p className="font-bold text-gray-800">{generatedPlan.dogInfo.age} years</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">Weight</span>
              <p className="font-bold text-gray-800">{generatedPlan.dogInfo.weight} lbs</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">Activity</span>
              <p className="font-bold text-gray-800 capitalize">{generatedPlan.dogInfo.activityLevel}</p>
            </div>
          </div>
        </div>

        {/* Vaccination Status - NEW FEATURE UI */}
        <div className="bg-white rounded-3xl p-6 border-2 border-amber-50 shadow-sm shadow-amber-50">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            Vaccination Log
          </h4>
          <div className="space-y-3">
            {vaxList.map((vax, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-xl border border-gray-50">
                <span className="font-bold text-sm text-gray-700">{vax.name}</span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${vax.color}`}>
                  {vax.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {/* Health Monitoring */}
        <div className="bg-white group">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-red-50 p-3 rounded-2xl">
              <Stethoscope className="h-6 w-6 text-red-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 tracking-tight">Health & Diagnostics</h4>
          </div>
          <div className="bg-gray-50/50 rounded-3xl p-6 space-y-4">
             <div className="flex items-center justify-between border-b border-gray-100 pb-3">
               <span className="font-bold text-gray-500">Checkup Interval</span>
               <span className="font-bold text-gray-900">{generatedPlan.healthMonitoring.checkupFreq}</span>
             </div>
             <div className="space-y-2">
                <span className="font-bold text-gray-500 block">Watch-out List:</span>
                <div className="flex flex-wrap gap-2">
                  {generatedPlan.healthMonitoring.concerns.map((concern, idx) => (
                    <span key={idx} className="bg-red-50 text-red-700 px-4 py-1.5 rounded-xl text-xs font-bold border border-red-100">
                      {concern}
                    </span>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* Nutrition */}
        <div className="bg-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-50 p-3 rounded-2xl">
              <Heart className="h-6 w-6 text-green-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 tracking-tight">Tailored Nutrition</h4>
          </div>
          <div className="bg-gray-50/50 rounded-3xl p-6 space-y-4">
             <p className="font-bold text-gray-800 text-lg leading-tight">{generatedPlan.nutrition.dietType}</p>
             <div className="flex items-center gap-2 bg-green-50 text-green-800 p-3 rounded-xl font-bold text-sm">
                <Activity className="w-4 h-4" />
                {generatedPlan.nutrition.feedingSchedule}
             </div>
             <p className="text-sm text-gray-500 italic">“{generatedPlan.nutrition.notes}”</p>
          </div>
        </div>

        {/* Exercise and More... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-amber-600" />
                <h5 className="font-bold text-gray-900">Weekly Energy</h5>
              </div>
              <ul className="space-y-2">
                {generatedPlan.exercise.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-amber-50/50 px-4 py-2 rounded-xl">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Scissors className="h-5 w-5 text-amber-600" />
                <h5 className="font-bold text-gray-900">Grooming Goal</h5>
              </div>
              <p className="text-sm font-bold text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                {generatedPlan.grooming.schedule}
              </p>
              <p className="text-xs text-gray-400 font-medium italic">{generatedPlan.grooming.special}</p>
            </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <button
          onClick={resetForm}
          className="flex-1 bg-amber-600 text-white px-8 py-5 rounded-3xl font-bold hover:bg-amber-700 transition-all shadow-xl shadow-amber-200"
        >
          Plan for Another Buddy
        </button>
        <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-5 rounded-3xl font-bold hover:bg-black transition-all">
          <Download className="w-5 h-5" />
          <span>Save PDF</span>
        </button>
      </div>
    </div>
  );
}
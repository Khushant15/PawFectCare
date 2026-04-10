import React from 'react';
import { Dog, ClipboardList, PenTool, Heart, PawPrint } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Pawsitive Profile",
      description: "We analyze your dog's breed, age, activity level, and medical history",
      icon: Dog
    },
    {
      step: "2", 
      title: "Expert Analysis",
      description: "Our canine experts review breed-specific health risks and nutritional needs",
      icon: ClipboardList
    },
    {
      step: "3",
      title: "Custom Blueprint", 
      description: "We design a personalized exercise, food, and grooming schedule just for them",
      icon: PenTool
    },
    {
      step: "4",
      title: "Lifelong Joy",
      description: "Continuous updates as your best friend moves through different life stages",
      icon: Heart
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block p-3 bg-amber-100 rounded-2xl text-amber-600 mb-2">
            <PawPrint className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900">How We Create Your Dog's <span className="text-amber-600">Perfect Plan</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A scientifically-backed approach to ensure your furry friend lives their best, most energetic life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((item, index) => (
            <div key={index} className="text-center group relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-amber-100 -ml-10 z-0 border-t border-dashed border-amber-300"></div>
              )}
              <div className="relative z-10">
                <div className="bg-white rounded-3xl w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-amber-600 transition-all duration-300">
                  <item.icon className="h-10 w-10 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <div className="bg-amber-600 text-white rounded-full w-10 h-10 mx-auto mb-4 flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
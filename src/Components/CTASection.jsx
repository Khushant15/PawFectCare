import { PawPrint } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-600 to-orange-600 relative overflow-hidden">
      {/* Sparkle effects */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -ml-10 -mt-10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mb-16"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-3xl">
            <PawPrint className="h-10 w-10 text-white" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to Give Your Dog the <span className="text-amber-200">Best Life?</span>
        </h2>
        <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Join 10,000+ dog parents who trust PawFect Care for personalized, science-backed wellness plans. 
          Your best friend deserves it.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#care-plan" className="bg-white text-orange-600 px-10 py-4 rounded-[2rem] text-lg font-bold hover:bg-amber-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            Start Doggy Plan Now
          </a>
          <a href="#breed-discovery" className="border-2 border-white/50 text-white px-10 py-4 rounded-[2rem] text-lg font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
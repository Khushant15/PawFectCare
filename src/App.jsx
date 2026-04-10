import { useState, useEffect } from 'react'
import HowItWorks from './Components/HowItWorks'
import HeroSection from './Components/HeroSection'
import Navigation from './Components/Navigation'
import CarePlanSection from './Components/CarePlanSection'
import Footer from './Components/Footer'
import CTASection from './Components/CTASection'
import ServicesSection from './Components/ServiceSection'
import ContactSection from './Components/ContactSection'
import BreedDiscovery from './Components/BreedDiscovery'
import TreatRecipes from './Components/TreatRecipes'
import PersonalityQuiz from './Components/PersonalityQuiz'
import DailyChecklist from './Components/DailyChecklist'
import DogAgeCalculator from './Components/DogAgeCalculator'


export default function PawFectCare() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation/>
      <HeroSection/>
      
      {/* Interactive Tools Section */}
      <section id="tools" className="py-24 bg-[#FFFDF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Interactive <span className="text-amber-600">PawFect Tools</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Daily essentials and fun calculators to help you understand your best friend better.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PersonalityQuiz />
            <DogAgeCalculator />
            <DailyChecklist />
          </div>
        </div>
      </section>

      <BreedDiscovery/>
      <HowItWorks/>
      <CarePlanSection/>
      <TreatRecipes/>
      <ServicesSection/>
      <CTASection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};
import React, { useState } from 'react';
import { X, Stethoscope, Heart, Users, Scissors } from 'lucide-react';
import CarePlanForm from './CarePlanForm';
import CarePlanDisplay from './CarePlanDisplay';

export default function CarePlanSection() {
  const [showPlan, setShowPlan] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [formData, setFormData] = useState({
    dogName: '',
    breed: '',
    age: '',
    weight: '',
    activityLevel: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateCarePlan = () => {
    // Generate a dog-specific care plan based on the form data
    const plan = {
      dogInfo: {
        name: formData.dogName,
        breed: formData.breed,
        age: formData.age,
        weight: formData.weight,
        activityLevel: formData.activityLevel || 'moderate'
      },
      healthMonitoring: {
        checkupFreq: formData.age < 2 ? 'Every 3-4 months' : formData.age > 7 ? 'Every 6 months' : 'Annually',
        vaccinations: 'Current: DHPP, Rabies, Bordetella',
        concerns: formData.breed.toLowerCase().includes('shepherd') ? ['Hip dysplasia', 'Bloat'] : 
                 formData.breed.toLowerCase().includes('retriever') ? ['Cancer screening', 'Joint health'] :
                 ['Weight management', 'Dental health', 'Heart checks']
      },
      nutrition: {
        dietType: `Premium ${formData.breed} specific adult formula`,
        feedingSchedule: formData.age < 1 ? '3-4 times daily' : '2 times daily',
        notes: `High-protein diet recommended for ${formData.breed} breed`
      },
      exercise: {
        needs: formData.activityLevel === 'high' ? 'High - 2+ hours daily' : 
               formData.activityLevel === 'low' ? 'Low - 30 minutes daily' : 'Moderate - 1 hour daily',
        activities: formData.breed.toLowerCase().includes('retriever') ? ['Fetch', 'Swimming', 'Tug-of-war'] :
                   formData.breed.toLowerCase().includes('bulldog') ? ['Indoor play', 'Short walks', 'Nose work'] :
                   ['Adventure walks', 'Social play', 'Agility training']
      },
      grooming: {
        schedule: formData.breed.toLowerCase().includes('poodle') ? 'Every 4-6 weeks' : 
                 formData.breed.toLowerCase().includes('retriever') ? 'Every 6-8 weeks' : 'Every 8-12 weeks',
        special: `${formData.breed} specific coat maintenance and nail trimming`
      }
    };
    
    setGeneratedPlan(plan);
    setShowPlan(true);
  };

  const handlePlanSubmit = (e) => {
    e.preventDefault();
    if (!formData.dogName || !formData.breed || !formData.age || !formData.weight) {
      alert('Please fill in all required fields to generate your doggie care plan!');
      return;
    }
    generateCarePlan();
  };

  const resetForm = () => {
    setShowPlan(false);
    setFormData({
      dogName: '',
      breed: '',
      age: '',
      weight: '',
      activityLevel: ''
    });
  };

  return (
    <section id="care-plan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Get Your Dog's <span className="text-amber-600">Tailored Plan</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Provide a few details about your furry friend and our experts will craft a comprehensive wellness journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!showPlan ? (
            <div className="bg-amber-50/50 p-8 rounded-[3rem] border border-amber-100 shadow-xl shadow-amber-50">
              <CarePlanForm 
                formData={formData}
                handleInputChange={handleInputChange}
                handlePlanSubmit={handlePlanSubmit}
              />
            </div>
          ) : (
            <CarePlanDisplay 
              generatedPlan={generatedPlan}
              setShowPlan={setShowPlan}
              resetForm={resetForm}
            />
          )}
        </div>
      </div>
    </section>
  );
}
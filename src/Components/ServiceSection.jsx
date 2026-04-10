import { Stethoscope, Scissors, Heart, Activity, CheckCircle, Sparkles } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Health Monitoring",
      description: "Complete canine health assessments with breed-specific screening and age-appropriate treatments.",
      features: ["Breed Health Screening", "Vaccination Schedules", "Annual Longevity Checks", "Preventive Wellness"]
    },
    {
      icon: Scissors,
      title: "Grooming Guide",
      description: "Customized grooming routines based on coat type, breed standards, and skin sensitivity.",
      features: ["Coat Maintenance", "Nail & Paw Care", "Ear & Dental Hygiene", "Summer/Winter Styling"]
    },
    {
      icon: Heart,
      title: "Nutritional Advice",
      description: "Precision-calibrated feeding plans considering age, weight, and daily energy output.",
      features: ["Custom Diet Recipes", "Weight Optimization", "Supplement Guidance", "Safe Treat Lists"]
    },
    {
      icon: Activity,
      title: "Exercise & Play",
      description: "Training and activity programs tailored to your dog's specific temperament and energy levels.",
      features: ["Breed-Specific Games", "Socialization Tips", "Mental Stimulation", "Daily Walk Goals"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <div className="flex justify-center mb-4">
             <div className="bg-amber-100 p-3 rounded-2xl">
                <Sparkles className="h-6 w-6 text-amber-600" />
             </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">What We Provide for <span className="text-amber-600">Your Friend</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every plan is scientifically customized based on your dog's unique breed, age, and individual personality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group bg-amber-50/30 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-amber-100">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="bg-white rounded-2xl p-5 shadow-lg shadow-amber-100 group-hover:bg-amber-600 transition-colors duration-300">
                  <service.icon className="h-10 w-10 text-amber-600 group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700 font-medium">
                        <CheckCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
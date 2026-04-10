import React from 'react';
import { ChefHat, Utensils, Clock, Flame } from 'lucide-react';

const recipes = [
  {
    title: "Puppy PB Bites",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["Peanut Butter", "Oats", "Honey"],
    image: "https://images.unsplash.com/photo-1594499468121-f45e83e30df4?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Carrot Crunchies",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["Carrots", "Flour", "Eggs"],
    image: "https://images.unsplash.com/photo-1598133185568-bb0aee6c89ca?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Sweet Potato Chews",
    time: "2 hrs",
    difficulty: "Low Heat",
    ingredients: ["Sweet Potato"],
    image: "https://images.unsplash.com/photo-1620921515118-49ba5d233496?auto=format&fit=crop&q=80&w=400"
  }
];

export default function TreatRecipes() {
  return (
    <section id="treat-recipes" className="py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-sm">
              <ChefHat className="w-5 h-5" />
              <span>Healthy Choices</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Homemade <span className="text-amber-600">Dog Treats</span></h2>
            <p className="text-gray-600 max-w-xl text-lg">
              Show your love with these simple, healthy, and dog-safe recipes you can make right in your kitchen.
            </p>
          </div>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-700 transition-all shadow-lg shadow-amber-200">
            View All Recipes
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 flex flex-col">
              <div className="h-56 overflow-hidden">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-4 mb-4 text-xs font-bold uppercase text-amber-500">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {recipe.time}</span>
                  <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> {recipe.difficulty}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{recipe.title}</h3>
                <div className="mb-6 flex-1">
                  <p className="text-sm text-gray-500 font-medium mb-2">Key Ingredients:</p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.map((ing, i) => (
                      <span key={i} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold border border-amber-100 italic">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="group flex items-center justify-center gap-2 w-full py-3 rounded-2xl border-2 border-amber-600 text-amber-600 font-bold hover:bg-amber-600 hover:text-white transition-all">
                  <Utensils className="w-4 h-4" />
                  <span>Get Recipe</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

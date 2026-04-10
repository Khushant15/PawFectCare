import React, { useState } from 'react';
import { Target, Smile, Zap, Sparkles, RefreshCw, Dog } from 'lucide-react';

export default function PersonalityQuiz() {
  const [step, setStep] = useState(0); // 0: start, 1-3: questions, 4: result
  const [scores, setScores] = useState({ chill: 0, active: 0, brainy: 0 });

  const questions = [
    {
      text: "How does your dog greet guests?",
      options: [
        { label: "Belly rub request immediate", type: "chill" },
        { label: "Zoomies around the living room", type: "active" },
        { label: "Brought them a specific toy", type: "brainy" }
      ]
    },
    {
      text: "Favorite weekend activity?",
      options: [
        { label: "Competitive napping", type: "chill" },
        { label: "Hiking 5+ miles", type: "active" },
        { label: "Learning a new trick", type: "brainy" }
      ]
    },
    {
      text: "When they see a squirrel...",
      options: [
        { label: "Just a lazy tail wag", type: "chill" },
        { label: "FULL SPEED CHASE", type: "active" },
        { label: "Calculated tracking position", type: "brainy" }
      ]
    }
  ];

  const handleAnswer = (type) => {
    setScores(prev => ({ ...prev, [type]: prev[type] + 1 }));
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const getResult = () => {
    const max = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    if (max === 'chill') return { title: "The Zen Master", desc: "Your dog is a nap-time professional. Low stress, high cuddles.", icon: Smile, color: "text-blue-600 bg-blue-100" };
    if (max === 'active') return { title: "The Olympic Sprinter", desc: "Energy levels are off the charts! Always ready for adventure.", icon: Zap, color: "text-amber-600 bg-amber-100" };
    return { title: "The Canine Scholar", desc: "Smart as a whip. Needs mental puzzles and complex training.", icon: Target, color: "text-purple-600 bg-purple-100" };
  };

  const reset = () => {
    setStep(0);
    setScores({ chill: 0, active: 0, brainy: 0 });
  };

  const result = getResult();

  return (
    <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-amber-100 border border-amber-50 h-full flex flex-col justify-center min-h-[500px]">
      {step === 0 && (
        <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="flex justify-center">
            <div className="bg-amber-100 p-6 rounded-full">
              <Sparkles className="w-12 h-12 text-amber-600" />
            </div>
          </div>
          <h3 className="text-3xl font-black text-gray-900 leading-tight">What's Their <br/><span className="text-amber-600">Dog Persona?</span></h3>
          <p className="text-gray-600 font-medium">Take the 30-second quiz to unlock your buddy's personality type.</p>
          <button 
            onClick={() => setStep(1)}
            className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold hover:bg-black transition-all transform hover:scale-105"
          >
            Start Quiz
          </button>
        </div>
      )}

      {step > 0 && step <= questions.length && (
        <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-amber-500">Question {step}/3</span>
            <div className="flex gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 w-6 rounded-full transition-colors ${i <= step ? 'bg-amber-500' : 'bg-gray-100'}`} />
              ))}
            </div>
          </div>
          <h4 className="text-2xl font-bold text-gray-900 leading-snug">{questions[step - 1].text}</h4>
          <div className="space-y-4">
            {questions[step - 1].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt.type)}
                className="w-full text-left p-6 rounded-2xl border-2 border-gray-50 hover:border-amber-500 hover:bg-amber-50/30 transition-all font-bold text-gray-700 shadow-sm"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step > questions.length && (
        <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="flex justify-center">
             <div className={`${result.color} p-8 rounded-[2rem] shadow-xl`}>
                <result.icon className="w-16 h-16" />
             </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl font-black text-gray-900">{result.title}</h4>
            <p className="text-gray-600 font-medium max-w-[280px] mx-auto text-lg leading-relaxed">{result.desc}</p>
          </div>
          <div className="pt-4 flex flex-col gap-3">
             <button className="bg-amber-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-amber-700 shadow-lg shadow-amber-200">
                <Dog className="w-5 h-5" />
                <span>Get Matching Plan</span>
             </button>
             <button onClick={reset} className="text-gray-400 font-bold flex items-center justify-center gap-2 hover:text-amber-600 pt-2 transition-colors">
                <RefreshCw className="w-4 h-4" />
                <span>Retake Quiz</span>
             </button>
          </div>
        </div>
      )}
    </div>
  );
}

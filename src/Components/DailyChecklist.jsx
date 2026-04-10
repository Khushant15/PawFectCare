import React, { useState, useEffect } from 'react';
import { ListChecks, CheckCircle2, Circle, Trophy } from 'lucide-react';

export default function DailyChecklist() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Morning Walkies", completed: false },
    { id: 2, text: "Fresh Water Refill", completed: false },
    { id: 3, text: "15-min Training Session", completed: false },
    { id: 4, text: "Evening Zoomies/Play", completed: false },
    { id: 5, text: "Teeth Brushing", completed: false },
  ]);

  // Load state from local storage
  useEffect(() => {
    const savedTasks = localStorage.getItem('pawfect_tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save state to local storage
  useEffect(() => {
    localStorage.setItem('pawfect_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = (completedCount / tasks.length) * 100;

  return (
    <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-amber-100 border border-amber-50 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-green-100 p-3 rounded-2xl">
          <ListChecks className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Today's Checkups</h3>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Consistency is Key</p>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {tasks.map(task => (
          <button
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`group w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 ${
              task.completed 
                ? 'bg-green-50/50 border-green-100 text-green-700' 
                : 'bg-gray-50/30 border-transparent hover:border-amber-100 text-gray-700'
            }`}
          >
            <span className={`font-bold transition-all ${task.completed ? 'line-through opacity-50' : ''}`}>
              {task.text}
            </span>
            {task.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            ) : (
              <Circle className="w-6 h-6 text-gray-300 group-hover:text-amber-500 transition-colors" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-4">
        <div className="flex items-center justify-between text-sm font-bold">
          <span className="text-gray-500">Daily Progress</span>
          <span className="text-amber-600">{Math.round(progressPercent)}%</span>
        </div>
        <div className="h-4 bg-gray-100 rounded-full overflow-hidden border-2 border-white shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-green-500 transition-all duration-1000 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        
        {progressPercent === 100 && (
          <div className="flex items-center justify-center gap-2 text-green-600 animate-bounce mt-4 font-bold text-sm">
            <Trophy className="w-5 h-5" />
            <span>Good Human! All Done!</span>
          </div>
        )}
      </div>
    </div>
  );
}

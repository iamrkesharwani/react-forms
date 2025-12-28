import { ArrowRight, ArrowLeft } from 'lucide-react';

const NavigationButtons = () => {
  return (
    <div className="flex justify-between items-center pt-8 mt-8 border-t-2 border-gray-100">
      <button className="px-8 py-4 text-slate-600 font-bold rounded-xl hover:shadow-xl transition flex items-center gap-2.5 active:scale-95">
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition" />
        <span>Previous</span>
      </button>

      <button className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:shadow-xl transition flex items-center gap-2.5 active:scale-95">
        <span className="relative z-10">Next Step</span>
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
      </button>
    </div>
  );
};

export default NavigationButtons;

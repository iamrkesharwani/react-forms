import { CheckCircle2, ArrowLeft } from 'lucide-react';

const SubmitButton = () => {
  return (
    <div className="flex group justify-between items-center pt-8 mt-8 border-t-2 border-gray-100">
      <button className="px-8 py-4 text-slate-600 font-bold rounded-xl hover:shadow-xl transition flex items-center gap-2.5 active:scale-95">
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition" />
        <span>Previous</span>
      </button>

      <button className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:shadow-xl transition flex items-center gap-2.5 active:scale-95">
        <CheckCircle2 className="h-5 w-5 relative z-10" />
        <span className="relative z-10">Complete Registration</span>
      </button>
    </div>
  );
};

export default SubmitButton;

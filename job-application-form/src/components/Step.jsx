import { ArrowLeft, ArrowRight } from 'lucide-react';

const Step = () => {
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-2 px-6 py-3 text-slate-700 rounded-xl transition font-semibold active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous Step
        </button>

        <button
          type="button"
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition active:scale-95 font-semibold"
        >
          Next Step
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Step;

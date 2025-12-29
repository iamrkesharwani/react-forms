import { Briefcase, Plus, X, Calendar } from 'lucide-react';

const WorkExperience = () => {
  return (
    <section className="p-8">
      <div className="mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Work Experience
            </h2>
            <p className="text-sm text-slate-500">
              Add your professional experience
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Experience #1 <span className="text-red-500">*</span>
            </h3>
          </div>
          <button
            type="button"
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all active:scale-75"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Senior Software Engineer"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 transition-all outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Tech Corp Inc."
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 transition-all outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2">
              Start Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 transition-all outline-none"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2">
              End Date <span className="text-red-500">*</span>
            </label>
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 transition-all outline-none"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-600 rounded border-2 border-slate-300"
              />
              <span className="text-sm font-medium text-slate-700">
                Currently working here
              </span>
            </label>
          </div>

          <div className="col-span-2">
            <label className="text-sm font-semibold text-slate-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Describe your key responsibilities and achievements..."
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 transition-all outline-none resize-none"
            />
            <p className="text-xs text-slate-500 mt-2">
              Minimum 100 characters
            </p>
          </div>
        </div>

        <div className="col-span-2 grid justify-items-end mt-4">
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl transition-all font-semibold active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Add Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

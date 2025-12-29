import { User } from 'lucide-react';

const PersonalDetails = () => {
  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Personal Details
          </h2>
          <p className="text-sm text-slate-500">Tell us about yourself</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Rahul Kesharwani"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 transition-all outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="rahul@email.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 transition-all outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 transition-all outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2">
            LinkedIn Profile
          </label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/johndoe"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 transition-all outline-none"
          />
        </div>

        <div className="col-span-2">
          <label className="text-sm font-semibold text-slate-700 mb-2">
            Professional Summary <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Brief overview of your professional background and career objectives..."
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 transition-all outline-none resize-none"
          />
          <p className="text-xs text-slate-500 mt-2">Minimum 50 characters</p>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;

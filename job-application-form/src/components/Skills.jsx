import { Award, Check } from 'lucide-react';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'AWS',
    'Docker',
    'GraphQL',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'CI/CD',
    'REST API',
    'Microservices',
    'Kubernetes',
    'Redis',
    'Vue.js',
    'Angular',
    'Next.js',
    'Express.js',
  ];

  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Skills & Expertise
          </h2>
          <p className="text-sm text-slate-500">Add your skills here</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {skills.map((skill) => (
          <label
            key={skill}
            className="relative flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50
            cursor-pointer transition-all group"
          >
            <input type="checkbox" className="peer sr-only" />

            <div
              className="w-5 h-5 rounded-md border-2 border-slate-300 peer-checked:bg-emerald-400 peer-checked:border-emerald-400 flex
            items-center justify-center transition-all"
            >
              <Check
                className="w-3 h-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                strokeWidth={3}
              />
            </div>

            <span className="text-sm font-semibold text-slate-700 peer-checked:text-emerald-700">
              {skill}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-6">
        <label className="text-sm font-semibold text-slate-700 mb-2">
          Add Custom Skill
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="e.g. Machine Learning"
            className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 transition-all outline-none"
          />
          <button
            type="button"
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl 
            hover:bg-emerald-500 transition-all font-semibold active:scale-95"
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;

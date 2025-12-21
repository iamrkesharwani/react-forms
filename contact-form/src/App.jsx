import { useForm } from 'react-hook-form';

const App = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted', data);
    setTimeout(() => reset(), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-slate-800/90 border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
            Contact form
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Get in touch
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-200 mb-1.5">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className={`w-full rounded-xl bg-slate-900/70 border px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition resize-none ${
                errors.name
                  ? 'border-amber-500 focus:ring-amber-500'
                  : 'border-slate-600 focus:ring-slate-500 focus:border-slate-500'
              }`}
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name should be atleast 2 characters',
                },
              })}
            />
            {/* Empty Name Validation */}
            <p className="mt-1 text-xs text-amber-400/80">
              {errors.name && errors.name.message}
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-slate-200">
                Email
              </label>

              <span className="text-[11px] text-slate-400">
                e.g. name@example.com
              </span>
            </div>
            <input
              type="email"
              placeholder="you@example.com"
              className={`w-full rounded-xl bg-slate-900/70 border px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition resize-none ${
                errors.email
                  ? 'border-amber-500 focus:ring-amber-500'
                  : 'border-slate-600 focus:ring-slate-500 focus:border-slate-500'
              }`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {/* Email Validation */}
            <p className="mt-1 text-xs text-amber-400/80">
              {errors.email && errors.email.message}
            </p>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-200 mb-1.5">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className={`w-full rounded-xl bg-slate-900/70 border px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition resize-none ${
                errors.message
                  ? 'border-amber-500 focus:ring-amber-500'
                  : 'border-slate-600 focus:ring-slate-500 focus:border-slate-500'
              }`}
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message should be at least 10 characters',
                },
              })}
            />
            {/* Empty Message Validation */}
            <p className="mt-1 text-xs text-amber-400/80">
              {errors.message && errors.message.message}
            </p>
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex justify-center items-center rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 border border-blue-500/70 transition active:scale-95"
            >
              Submit
            </button>

            {/* Success message */}
            <div className="text-xs text-emerald-400/90">
              {isSubmitSuccessful && (
                <span className="opacity-80">Message sent successfully!</span>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

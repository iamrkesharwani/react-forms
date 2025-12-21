const Form = ({ handleSubmit, register, errors }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-6 border border-slate-100">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-1">
            Create Profile
          </h2>
          <p className="text-sm text-slate-500">
            Fill in your details to get started
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div className="relative">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                First Name
              </label>
              <input
                type="text"
                placeholder="Rahul"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                {...register('firstName', {
                  required: 'First name is required',
                })}
              />
              <p className="text-[.75rem] px-1 text-red-600 absolute top-[3.1rem] left-3 bg-slate-50">
                {errors.firstName && errors.firstName.message}
              </p>
            </div>

            {/* Last Name */}
            <div className="relative">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Kesharwani"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                {...register('lastName', { required: 'Last name is required' })}
              />
              <p className="text-[.75rem] px-1 text-red-600 absolute top-[3.1rem] left-3 bg-slate-50">
                {errors.lastName && errors.lastName.message}
              </p>
            </div>
          </div>

          {/* Email and Age Row */}
          <div className="grid grid-cols-3 gap-4">
            {/* Email */}
            <div className="col-span-2 relative">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                {...register('email', {
                  required: 'email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email',
                  },
                })}
              />
              <p className="text-[.75rem] px-1 text-red-600 absolute top-[3.1rem] left-3 bg-slate-50">
                {errors.email && errors.email.message}
              </p>
            </div>

            {/* Age */}
            <div className="relative">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Age
              </label>
              <input
                type="number"
                placeholder="18"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                {...register('age', {
                  required: 'Age is required',
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: 'Min age can be 1',
                  },
                  max: { value: 100, message: 'Max age can be 100' },
                })}
              />
              <p className="text-[.75rem] px-1 text-red-600 absolute top-[3.1rem] left-3 bg-slate-50">
                {errors.age && errors.age.message}
              </p>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Gender
            </label>

            <div className="flex gap-3">
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={'Male'}
                  className="peer hidden"
                  {...register('gender', { required: 'Select gender' })}
                />
                <div className="flex items-center justify-center px-3 py-2 rounded-lg border-2 border-slate-300 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all hover:border-slate-400">
                  <span className="text-xs font-medium">Male</span>
                </div>
              </label>

              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={'Female'}
                  className="peer hidden"
                  {...register('gender')}
                />
                <div className="flex items-center justify-center px-3 py-2 rounded-lg border-2 border-slate-300 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all hover:border-slate-400">
                  <span className="text-xs font-medium">Female</span>
                </div>
              </label>

              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={'Other'}
                  className="peer hidden"
                  {...register('gender')}
                />
                <div className="flex items-center justify-center px-3 py-2 rounded-lg border-2 border-slate-300 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all hover:border-slate-400">
                  <span className="text-xs font-medium">Other</span>
                </div>
              </label>
            </div>
            <p className="text-[.75rem] px-1 ml-3 text-red-600 bg-slate-50">
              {errors.gender && errors.gender?.message}
            </p>
          </div>

          {/* Bio */}
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Bio
            </label>
            <textarea
              rows="3"
              placeholder="Tell us about yourself..."
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all bg-slate-50 focus:bg-white"
              {...register('bio', {
                required: 'Description is required',
                minLength: { value: 10, message: 'At least 10 characters' },
                maxLength: { value: 200, message: 'Max 200 characters' },
              })}
            ></textarea>
            <p className="text-xs text-right text-slate-400 mt-1">
              Max 200 characters
            </p>
            <p className="text-[.75rem] px-1 text-red-600 absolute bottom-[1.1rem] left-3 bg-slate-50">
              {errors.bio && errors.bio.message}
            </p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 py-2.5 rounded-lg text-sm text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.99]"
          >
            Preview Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

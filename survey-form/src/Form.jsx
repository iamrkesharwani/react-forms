import { MdUploadFile, MdOutlineEmail } from 'react-icons/md';
import { FaRegUser, FaStar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useState } from 'react';

const Form = ({ register, handleSubmit, errors, watch }) => {
  const [hovered, setHovered] = useState(0);

  const INTERESTS = [
    'Technology',
    'Travel',
    'Cooking',
    'Fitness',
    'Gaming',
    'Music',
  ];
  const STARS = [5, 4, 3, 2, 1];
  const GENDERS = ['Male', 'Female', 'Other'];

  const watchedRating = watch('rating');
  const selectedStar = Number(watchedRating) || 0;

  const activeStar = hovered || selectedStar;

  return (
    <div className="h-screen w-full bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-slate-900/40 backdrop-blur-2xl rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
        <section className="flex items-center justify-center gap-3 mb-5">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 rounded-xl flex justify-center items-center">
            <MdUploadFile size={22} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            We value your opinion
          </h1>
        </section>

        <form onSubmit={handleSubmit} className="space-y-3">
          <section className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="text-xs font-medium text-slate-300 pl-1 block mb-1.5">
                Full Name
              </label>
              <div className="relative border border-slate-700/50 bg-slate-800/50 px-3 py-2 rounded-lg focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all">
                <FaRegUser
                  className="absolute top-3 left-3 text-slate-500"
                  size={14}
                />
                <input
                  type="text"
                  placeholder="Rahul Kesharwani"
                  className="pl-6 outline-none bg-transparent w-full text-white text-sm placeholder:text-slate-500"
                  {...register('name', {
                    required: 'This field is required',
                    minLength: {
                      value: 3,
                      message: 'At least 3 characters',
                    },
                  })}
                />
              </div>
              <p className="text-red-500 left-9 text-sm">
                {errors.name && errors.name.message}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-medium text-slate-300 pl-1 block mb-1.5">
                Email Address
              </label>
              <div className="relative border border-slate-700/50 bg-slate-800/50 px-3 py-2 rounded-lg focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all">
                <MdOutlineEmail
                  className="absolute top-3 left-3 text-slate-500"
                  size={15}
                />
                <input
                  type="text"
                  placeholder="rahul.kesharwani@email.com"
                  className="pl-6 outline-none bg-transparent w-full text-white text-sm placeholder:text-slate-500"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Correct email format required',
                    },
                  })}
                />
              </div>
              <p className="text-red-500 left-9 text-sm">
                {errors.email && errors.email.message}
              </p>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            {/* Gender */}
            <div>
              <label className="text-xs font-medium text-slate-300 pl-1 block mb-1.5">
                Gender
              </label>
              <div className="flex items-center justify-center gap-2">
                {GENDERS.map((gen) => (
                  <label className="cursor-pointer flex-1">
                    <input
                      type="radio"
                      name="gender"
                      value={gen}
                      className="sr-only peer"
                      {...register('gender', { required: 'Select a gender' })}
                    />
                    <div className="flex items-center justify-center py-2 rounded-lg border border-slate-700/50 text-slate-400 bg-slate-800/50 peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-600 peer-checked:border-transparent peer-checked:text-white transition-all hover:border-slate-600">
                      <span className="text-xs font-medium select-none">{gen}</span>
                    </div>
                  </label>
                ))}
              </div>
              <p className="text-red-500 left-9 text-sm">
                {errors.gender && errors.gender.message}
              </p>
            </div>

            {/* Interests */}
            <div>
              <label className="text-xs font-medium text-slate-300 pl-1 block mb-1.5">
                Interests
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {INTERESTS.map((int) => (
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      value={int}
                      {...register('interests', {
                        required: 'Select at least one interest',
                      })}
                    />
                    <div className="flex items-center justify-center py-2 rounded-lg text-xs font-medium border border-slate-700/50 bg-slate-800/50 text-slate-400 hover:border-slate-600 peer-checked:bg-gradient-to-r peer-checked:from-indigo-500 peer-checked:to-purple-600 peer-checked:text-white peer-checked:border-transparent transition-all select-none">
                      {int}
                    </div>
                  </label>
                ))}
              </div>
              <p className="text-red-500 left-9 text-sm">
                {errors.interests && errors.interests.message}
              </p>
            </div>
          </section>

          <hr className="border-slate-700/50 my-1" />

          {/* Rating */}
          <div className="py-1">
            <p className="text-xs font-medium text-slate-300 mb-2.5 text-center">
              How would you rate your experience?
            </p>
            <div className="flex flex-row-reverse justify-center items-center gap-2">
              {STARS.map((star) => {
                const isActive = activeStar >= star;

                return (
                  <div key={star}>
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      id={`star${star}`}
                      className="sr-only"
                      {...register('rating', { required: 'Select a rating' })}
                    />
                    <label
                      htmlFor={`star${star}`}
                      onMouseEnter={() => setHovered(star)}
                      onMouseLeave={() => setHovered(0)}
                      onFocus={() => setHovered(star)}
                      onBlur={() => setHovered(0)}
                      className={`cursor-pointer transition-transform transform ${
                        isActive ? 'text-yellow-400 scale-95' : 'text-slate-400'
                      }`}
                    >
                      <FaStar
                        size={24}
                        className={`transition-colors ${
                          isActive ? 'text-yellow-600' : 'text-slate-700'
                        }`}
                      />
                    </label>
                  </div>
                );
              })}
            </div>
            <p className="text-red-500 text-center left-9 text-sm">
              {errors.rating && errors.rating.message}
            </p>
            <h1 className="text-xs text-center text-slate-500 mt-2">
              1 = Poor, 5 = Excellent
            </h1>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5 pl-1">
              Additional Comments
            </label>
            <div className="relative">
              <textarea
                rows="2"
                placeholder="Tell us about your experience..."
                className="w-full px-3 py-2.5 rounded-lg border border-slate-700/50 bg-slate-800/50 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none hover:border-slate-600"
                {...register('comments', {
                  required: 'Enter a message',
                  minLength: {
                    value: 10,
                    message: 'Atleast 10 characters',
                  },
                  maxLength: {
                    value: 200,
                    message: 'Maximum 200 characters allowed',
                  },
                })}
              ></textarea>
              <div className="absolute bottom-2 right-3 text-xs text-slate-600 pointer-events-none">
                Max 200 chars
              </div>
              <p className="text-red-500 left-9 text-sm">
                {errors.comments && errors.comments.message}
              </p>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group flex items-center justify-center w-full gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transform active:scale-[0.98] mt-1"
          >
            Submit Feedback
            <FaArrowRightLong
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

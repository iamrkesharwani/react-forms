import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    const saved = localStorage.getItem('rememberMe');

    if (saved) {
      const data = JSON.parse(saved);
      reset({
        name: data.name || '',
        email: data.email || '',
        password: '',
      });
      setRememberMe(true);
    }
  }, [reset]);

  function handleSubmitForm(data) {
    console.log('Form data:', data);

    if (rememberMe) {
      localStorage.setItem(
        'rememberMe',
        JSON.stringify({ name: data.name, email: data.email })
      );
    } else {
      localStorage.removeItem('rememberMe');
    }

    setTimeout(() => {
      reset({
        name: rememberMe ? data.name : '',
        email: rememberMe ? data.email : '',
        password: '',
      });
    }, 5000);
  }

  return (
    <div className="h-screen p-5 flex items-center bg-slate-300 justify-center">
      <div className="w-[40vw] h-full shadow-lg shadow-slate-700/40 py-5 px-6 bg-slate-100 rounded-xl">
        <h1 className="font-semibold text-3xl">Sign in</h1>

        <form onSubmit={handleSubmit(handleSubmitForm)}>
          {/* Username */}
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="e.g. rahul.k"
              className="py-2.5 rounded-lg px-4 shadow-md border border-gray-300"
              {...register('name', {
                required: 'Username is required',
                minLength: {
                  value: 2,
                  message: 'Atleast 2 characters required',
                },
              })}
            />
            <p className="font-normal text-red-600 text-sm">
              {errors.name && errors.name.message}
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. rahul@kesharwani.com"
              className="py-2.5 rounded-lg px-4 shadow-md border border-gray-300"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter valid email address',
                },
              })}
            />
            <p className="font-normal text-red-600 text-sm">
              {errors.email && errors.email.message}
            </p>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Your password"
              className="py-2.5 rounded-lg px-4 shadow-md border border-gray-300"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Atleast 8 characters required',
                },
              })}
            />
            <p className="font-normal text-red-600 text-sm">
              {errors.password && errors.password.message}
            </p>
          </div>

          {/* Options */}
          <section className="mt-5 space-y-2">
            <div className="flex items-center">
              <input
                id="show"
                type="checkbox"
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor="show" className="text-sm ml-2">
                Show password
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember" className="text-sm ml-2">
                Remember me
              </label>
            </div>
          </section>

          {/* Button */}
          <button
            className="w-full mt-5 py-2 text-white rounded-lg text-lg font-semibold bg-indigo-600"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

import { Bell, CheckCircle2, Heart, Mail, Phone, Star } from 'lucide-react';

const Preferences = () => {
  const interests = [
    'Technology',
    'Design',
    'Business',
    'Marketing',
    'Science',
    'Art',
  ];

  const notification = [
    {
      name: 'Email Notification',
      desc: 'Receive updates via email',
      icon: Mail,
    },
    {
      name: 'Push Notifications',
      desc: 'Receive push notifications',
      icon: Bell,
    },
    {
      name: 'SMS Notifications',
      desc: 'Receive text messages',
      icon: Phone,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
          <Star className="h-3.5 w-3.5" />
          Step 3 of 3
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
          Preferences
        </h2>
      </div>

      <div className="space-y-7">
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Heart className="h-4 w-4 text-orange-500" />
            Select Your Interests
          </label>
          <div className="grid grid-cols-2 gap-3">
            {interests.map((int) => (
              <button className="group relative px-5 py-4 border-2 border-gray-500 rounded-xl text-sm font-semibold text-slate-700 transition hover:shadow-lg active:scale-95">
                <div className="relative flex items-center justify-between">
                  <span>{int}</span>
                  {/* <CheckCircle2 className="h-5 w-5 text-orange-600" /> */}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Bell className="h-4 w-4 text-orange-500" />
            Notification Preferences
          </label>

          <div className="space-y-3 bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl border border-gray-200">
            {notification.map((not) => {
              const Icon = not.icon;
              return (
                <label className="flex items-center justify-between cursor-pointer p-4 bg-white rounded-xl transition group hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{not.name}</p>
                      <p className="text-sm text-gray-500">{not.desc}</p>
                    </div>
                  </div>
                  <div className="relative inline-block w-14 h-8">
                    <div className="absolute inset-0 bg-gray-300 rounded-full shadow-inner"></div>
                    <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform"></div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;

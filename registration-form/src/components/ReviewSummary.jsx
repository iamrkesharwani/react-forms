import { CheckCircle2, Heart, Lock, User } from 'lucide-react';

const ReviewSummary = () => {
  const personalInfo = [
    { label: 'Full Name', value: 'John Doe' },
    { label: 'Email', value: 'john@example.com' },
    { label: 'Phone', value: '+1 (555) 000-0000' },
  ];

  const accountDetails = [
    { label: 'Username', value: 'johndoe' },
    { label: 'Password', value: '••••••••••••' },
  ];

  const selectedInterests = ['Technology', 'Science'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Final Step
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Review & Confirm
        </h2>
        <p className="text-gray-600 text-lg">
          Please review your information before submitting
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative bg-blue-50 rounded-2xl p-6 border-2 border-blue-100">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                <User className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Personal Information
              </h3>
            </div>

            <div className="space-y-3">
              {personalInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 bg-white/80 backdrop-blur rounded-xl"
                >
                  <span className="text-sm text-gray-600 font-medium">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account Details Card */}
        <div className="relative overflow-hidden bg-purple-50 to-white rounded-2xl p-6 border-2 border-purple-100">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg">
                <Lock className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Account Details
              </h3>
            </div>

            <div className="space-y-3">
              {accountDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 bg-white/80 backdrop-blur rounded-xl"
                >
                  <span className="text-sm text-gray-600 font-medium">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preferences Card */}
        <div className="relative overflow-hidden bg-orange-50 rounded-2xl p-6 border-2 border-purple-100">
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Preferences</h3>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-white/80 backdrop-blur rounded-xl">
                <span className="text-sm text-gray-600 font-medium block mb-3">
                  Selected Interests
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedInterests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-orange-100 to-pink-100 rounded-full text-xs font-bold text-orange-700 border border-orange-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-white/80 backdrop-blur rounded-xl">
                <span className="text-sm text-gray-600 font-medium block mb-3">
                  Active Notifications
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700 font-medium">
                    Email Notifications
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;

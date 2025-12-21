const UserProfile = ({ data, onClose }) => {
  const { firstName, lastName, email, age, gender, bio } = data;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-6 border border-slate-100 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors text-slate-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Profile Preview
        </h2>

        {/* Avatar */}
        <div className="flex justify-center mb-5">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg"></div>
          </div>
        </div>

        {/* Name + Email */}
        <div className="text-center space-y-1 mb-6">
          <p className="text-xl font-bold text-slate-800">
            {firstName} {lastName}
          </p>
          <p className="text-xs text-slate-500 font-medium">{email}</p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl border border-blue-200/50 hover:shadow-md transition-all">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
              Age
            </p>
            <p className="text-xl font-bold text-slate-800">{age}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl border border-purple-200/50 hover:shadow-md transition-all">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
              Gender
            </p>
            <p className="text-xl font-bold text-slate-800">{gender}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 p-4 rounded-xl border border-slate-200/50 mb-6">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
            Bio
          </p>
          <p className="text-xs text-slate-700 leading-relaxed">{bio}</p>
        </div>

        {/* Buttons */}
        <div>
          <button
            className="bg-gradient-to-r w-full from-blue-600 to-blue-700 py-2.5 rounded-xl text-sm text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.99]"
            onClick={onClose}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

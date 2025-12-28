const ProgressIndicator = () => {
  const progress = ['Personal Info', 'Account Details', 'Preferences'];

  return (
    <div className="w-full max-w-3xl mx-auto mb-6">
      <div className="relative">
        <div className="flex items-start justify-between">
          {progress.map((prog, index) => (
            <div className="flex flex-col items-center flex-1 relative">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold ">
                <span className="z-10">{index + 1}</span>
              </div>
              <div className="mt-1 text-center">
                <p className="text-xs font-semibold text-blue-600">{prog}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;

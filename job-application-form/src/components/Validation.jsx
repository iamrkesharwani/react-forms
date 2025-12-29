import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const Validation = () => {
  return (
    <section className="p-8">
      <div className="bg-gradient-to-br from-amber-50 border-2 border-amber-200 rounded-2xl p-6">
        <div className="gap-4">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-amber-900">Form Summary</h3>
              <p className="text-sm text-amber-700">
                Review the details before submitting
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-amber-200">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Personal Details Incomplete
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Email address pending
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Resume Upload Complete
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    File validated successfully
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-amber-200 flex items-center justify-between">
              <div className="text-sm">
                <span className="font-bold text-amber-900">1</span>
                <span className="text-amber-700"> issues remaining</span>
              </div>
              <div className="text-sm">
                <span className="font-bold text-green-700">1</span>
                <span className="text-slate-600"> completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Validation;

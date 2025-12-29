import { FileText, Upload, CheckCircle, File } from 'lucide-react';

const Resume = () => {
  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Resume Upload</h2>
          <p className="text-sm text-slate-500">Last step: share resume</p>
        </div>
      </div>

      <div className="rounded-2xl p-10 text-center cursor-pointer group">
        <div className="flex flex-col items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center">
            <Upload className="w-10 h-10 text-purple-600" />
          </div>

          <div>
            <p className="text-xl font-bold text-slate-900 mb-2">
              Drop your resume here <span className="text-red-500">*</span>
            </p>
            <p className="text-sm text-slate-500 mb-1">or click to browse</p>
            <p className="text-xs text-slate-400">
              Supported format: PDF (max 5MB)
            </p>
          </div>

          <button
            type="button"
            className="px-8 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition-all font-semibold active:scale-95"
          >
            Select File
          </button>
        </div>
      </div>

      <div className="mt-6 p-5 border-2 border-green-200 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
            <File className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">
              Rahul_Kesharwani_Resume.pdf
            </p>
            <p className="text-xs text-slate-500">
              2.4 MB • Uploaded successfully
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <button
            type="button"
            className="px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition active:scale-95"
          >
            Remove
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;

import { FaStar } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

const Summary = ({ data, onClose }) => {
  const { name, email, gender, interests, rating, comments } = data;

  const firstLetter = name?.[0]?.toUpperCase();

  return (
    <div className="min-h-screen inset-0 fixed bg-black/50 backdrop-blur-sm w-full flex items-center justify-center p-4">
      <div className="w-full max-w-3xl relative">
        <div className="bg-emerald-700 border border-emerald-400 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start">
          <div className="bg-emerald-200 p-3 rounded-xl shadow-sm border">
            <div className="h-10 w-10 bg-emerald-700 rounded-full flex items-center justify-center text-emerald-200 font-bold text-lg">
              {firstLetter}
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-emerald-200">{name}</h3>
                  <div className="text-sm text-emerald-300">({gender})</div>
                </div>
                <p className="text-sm text-emerald-100">{email}</p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 mr-8 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                <FaStar className="text-emerald-600" size={12} />
                {rating}/5 Rating
              </span>
            </div>

            <div className="flex gap-2 pt-1">
              {interests.map((int, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold px-2 py-1 rounded bg-emerald-200 text-emerald-800"
                >
                  {int}
                </span>
              ))}
            </div>

            <p className="text-sm text-emerald-200 italic pt-2">{comments}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-[1.45rem] right-5 bg-emerald-300 rounded-full p-0.5 active:scale-95 transition-all duration-200"
          >
            <IoCloseSharp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;

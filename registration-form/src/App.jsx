import AccountDetails from './components/AccountDetails';
import NavigationButtons from './components/NavigationButtons';
import PersonalInfo from './components/PersonalInfo';
import Preferences from './components/Preferences';
import ProgressIndicator from './components/ProgressIndicator';
import ReviewSummary from './components/ReviewSummary';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="text-4xl font-bold text-blue-600 mb-12 text-center">
        Registration Form
      </div>
      <div className="max-w-3xl mx-auto">
        <ProgressIndicator />
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <PersonalInfo />
          <AccountDetails />
          <Preferences />
          <ReviewSummary />
          <NavigationButtons />
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default App;

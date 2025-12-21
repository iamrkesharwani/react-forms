import { useState } from 'react';
import Form from './Form';
import UserProfile from './UserProfile';
import { useForm } from 'react-hook-form';

const App = () => {
  const [formData, setFormData] = useState(null);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      gender: '',
      bio: '',
    },
  });

  function onHandleSubmit(data) {
    setFormData(data);
    setTimeout(() => {
      reset();
    }, 3000);
  }

  return (
    <div>
      <Form
        handleSubmit={handleSubmit(onHandleSubmit)}
        register={register}
        errors={errors}
      />
      {formData && (
        <UserProfile data={formData} onClose={() => setFormData(null)} />
      )}
    </div>
  );
};

export default App;

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from './Form';
import Summary from './Summary';

const App = () => {
  const [formData, setFormData] = useState(null);

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      gender: '',
      interests: [],
      rating: '',
      comments: '',
    },
  });

  function handleFormSubmit(data) {
    setFormData(data);
    reset();
  }

  return (
    <div>
      <Form
        register={register}
        handleSubmit={handleSubmit(handleFormSubmit)}
        errors={errors}
        watch={watch}
      />
      {formData && (
        <Summary
          data={formData}
          onClose={() => {
            setFormData(null);
          }}
        />
      )}
    </div>
  );
};

export default App;

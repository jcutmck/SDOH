import React from 'react';
import ReusableForm from '../components/FormsTemplate';
import { SubmitButton } from '../components/Button';

const PageForm = () => {
  const initialValues = { name: '', email: '' };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const fields = [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
  ];

  return (
    <ReusableForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      fields={fields}
      SubmitButton={(props) => (
        <SubmitButton {...props} text="SUBMIT" variant="contained" color="primary" />
      )}
    />
  );
};

export default PageForm;
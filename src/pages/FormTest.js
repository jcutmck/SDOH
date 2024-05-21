// PageForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
//import * as Yup from 'yup';
import { SubmitButton } from '../components/Button';

const PageForm = () => {
  const initialValues = { name: '', email: '' };
  /*
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
*/
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
 //     validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ submitForm }) => (
        <Form>
          <Field
            component={TextField}
            name="name"
            label="Name"
            fullWidth
            margin="normal"
          />
          <Field
            component={TextField}
            name="email"
            label="Email"
            fullWidth
            margin="normal"
          />
          <SubmitButton
            type="button"
            onClick={submitForm}
            variant="contained"
            color="primary"
            text = "SUBMIT"
            ></SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default PageForm;
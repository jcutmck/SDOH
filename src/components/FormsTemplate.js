// ReusableForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Button } from '@mui/material';
import FormikDateField from './FormikDateField';
import '../resources/formStyles.css' ;


const ReusableForm = ({ initialValues, onSubmit, fields, SubmitButton, buttonText }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ submitForm }) => (
        <Form className="form-container">
          {fields.map((field, index) => {
            if (field.type === 'date') {
              return (
                <FormikDateField
                  key={index}
                  name={field.name}
                  label={field.label}
                />
              );
            }
            return (
              <Field
                key={index}
                component={TextField}
                name={field.name}
                label={field.label}
                fullWidth
                margin="normal"
                className="form-field"
                helperText={field.helperText || ''}
              />
            );
          })}
          {SubmitButton ? (
            <SubmitButton onClick={submitForm} className="form-button" text={buttonText} />
          ) : (
            <Button
              type="button"
              onClick={submitForm}
              variant="contained"
              color="primary"
              className="form-button"

            >
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ReusableForm;
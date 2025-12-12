import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required')
    .min(3, 'Must be 3 characters or more'),
  email: Yup.string().required('Email is required')
    .email('Invalid email address'),
  password: Yup.string().required('Password is required')
    .min(8, 'Password must be 8 characters or more')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter'),
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Formik Data Submitted:', values);
    setTimeout(() => {
      alert(`Registration successful for ${values.username}! (Simulated)`);
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #0056b3', borderRadius: '5px', maxWidth: '400px', margin: '20px auto' }}>
      <h2>Formik & Yup Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field id="username" name="username" type="text" style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }} />
              <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '0.8em' }} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field id="email" name="email" type="email" style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }} />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '0.8em' }} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field id="password" name="password" type="password" style={{ display: 'block', width: '90%', padding: '8px', margin: '5px 0' }} />
              <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '0.8em' }} />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting} 
              style={{ padding: '10px 15px', marginTop: '15px', backgroundColor: isSubmitting ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: isSubmitting ? 'default' : 'pointer' }}
            >
              {isSubmitting ? 'Submitting...' : 'Register with Formik'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
